import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonCloseDirective,
  ButtonDirective,
  FormModule,
  GridModule,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  TableModule,
  ThemeDirective
} from '@coreui/angular';


@Component({
  selector: 'app-expense-voucher',
  standalone: true,
  imports: [FormsModule,GridModule,TableModule,FormModule,ButtonDirective,ButtonCloseDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ThemeDirective],
  templateUrl: './expense-voucher.component.html',
  styleUrl: './expense-voucher.component.scss'
})
export class ExpenseVoucherComponent {
  expenseHead: string = '';
  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  onSubmit() {
    if (this.expenseHead) {
      // Logic to save the expense head
      console.log('New Expense Head:', this.expenseHead);
      this.expenseHead = ''; // Reset form
    }
  }
}
