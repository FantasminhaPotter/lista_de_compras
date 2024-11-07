import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Ajuste o caminho conforme necessário
import { ListaComprasComponent } from './lista-compras/lista-compras.component'; // Ajuste o caminho conforme necessário
import { AuthGuard } from './auth/auth.guard'; // Ajuste o caminho conforme necessário

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lista-compras', component: ListaComprasComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
