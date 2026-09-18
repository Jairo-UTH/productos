import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProduListPage } from './paginas/produ-list-page/produ-list-page';
import { CarroPage } from './paginas/carro-page/carro-page';
import { ComprasPage } from './paginas/compras-page/compras-page';
import { NewProduPage } from './paginas/new-produ-page/new-produ-page';

export const routes: Routes = [

  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: ProduListPage },
      { path: 'cart', component: CarroPage },
      { path: 'purchase', component: ComprasPage },
      { path: 'newProduct', component: NewProduPage },
    ]
  }

];
