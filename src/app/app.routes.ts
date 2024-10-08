import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'expenses-head',
        loadComponent: () => import('./views/expense-head/expense-head.component').then(m => m.ExpenseHeadComponent),
        data: {
          title: 'Expenses Head'
        }
      },
      {
        path: 'expenses-voucher',
        loadComponent: () => import('./views/expense-voucher/expense-voucher.component').then(m => m.ExpenseVoucherComponent),
        data: {
          title: 'Expenses Voucher'
        }
      },
      {
        path: 'datawise-expense',
        loadComponent: () => import('./views/datawise-expenses/datawise-expenses.component').then(m => m.DatawiseExpensesComponent),
        data: {
          title: 'DataWise Expenses'
        }
      },
      {
        path: 'customer-type',
        loadComponent: () => import('./views/define-customertype/define-customertype.component').then(m => m.DefineCustomertypeComponent),
        data: {
          title: 'Customer Type'
        }
      },
      {
        path: 'customers',
        loadComponent: () => import('./views/customers/customers.component').then(m => m.CustomersComponent),
        data: {
          title: 'Customer'
        }
      },
      {
        path: 'cylender-type',
        loadComponent: () => import('./views/cylinder-type/cylinder-type.component').then(m => m.CylinderTypeComponent),
        data: {
          title: 'Cylinder Type'
        }
      },
      {
        path: 'lpg-rate',
        loadComponent: () => import('./views/lpg-rate/lpg-rate.component').then(m => m.LpgRateComponent),
        data: {
          title: 'LPG Rate'
        }
      },
      {
        path: 'purchase',
        loadComponent: () => import('./views/purchase/purchase.component').then(m => m.PurchaseComponent),
        data: {
          title: 'Purchase'
        }
      },
      {
        path: 'sale-invoice',
        loadComponent: () => import('./views/sale-invoice/sale-invoice.component').then(m => m.SaleInvoiceComponent),
        data: {
          title: 'Sales Invoice'
        }
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },

  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
