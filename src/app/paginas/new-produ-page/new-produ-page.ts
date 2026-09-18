import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormField, form, required } from '@angular/forms/signals';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { getCategoryResponse } from '../../interfaces/categorias';
import { CategoriaServicios } from '../../servicios/categoria-servicios';
import { ProductoServicios } from '../../servicios/producto-servicios';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateProductRequest } from '../../interfaces/produc';


@Component({
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule,
    MatInputModule, MatIconModule, MatSelectModule, FormField],
  selector: 'app-new-produ-page',
  styleUrl: './new-produ-page.scss',
  templateUrl: './new-produ-page.html',
})
export class NewProduPage {

  private initialData = {
    categoryId:'0',
    name: '',
    price: '',
    stockQuantity: '',
    image: null
  }

  private produtModel = signal(this.initialData);
  protected productForm = form(this.produtModel, (field) => {
    required(field.categoryId);
    required(field.name);
    required(field.price);
    required(field.stockQuantity);
  })

  protected selectedFile = signal<File | null>(null);
  protected categories = signal<getCategoryResponse[]>([])
  protected categoryService = inject(CategoriaServicios)
  protected productService = inject(ProductoServicios)
  private _snackBar = inject(MatSnackBar)

  constructor() {
    this.categoryService.getAll().subscribe({
      next: resp => this.categories.set(resp),
      error: (e) => console.log(e.error)
    })
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement

    if (input.files && input.files.length > 0) this.selectedFile.set(input.files[0])


  }

  createProduct(): void {
    const { categoryId, name, price, stockQuantity } = this.productForm().value()
    const req: CreateProductRequest =
    {
      categoryId: Number(categoryId),
      name,
      price: Number(price),
      stockQuantity: Number(stockQuantity)
    }
    if (this.selectedFile()) req.image = this.selectedFile()!
    this.productService.create(req).subscribe({
      next: resp => {
        this._snackBar.open('Producto Añadido!', 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration:2000

        })
        this.cleanForm
      },
      error: (e) => console.log(e.error)
    })
  }

  cleanForm(): void {
    this.produtModel.set(this.initialData)
    this.productForm().reset()
    this.selectedFile.set(null)
  }

}
