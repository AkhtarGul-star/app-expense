import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpensheadService } from 'src/app/Services/expense-head-service/expenshead.service';
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
import { LpgRate } from 'src/app/Models/models';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-lpg-rate',
  standalone: true,
  imports: [FormsModule,GridModule,TableModule,FormModule,ButtonDirective,ButtonCloseDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ReactiveFormsModule,
    ModalHeaderComponent,
    ModalTitleDirective,
    ThemeDirective,IconDirective],
  templateUrl: './lpg-rate.component.html',
  styleUrl: './lpg-rate.component.scss'
})
export class LpgRateComponent {
  private expensHeadService = inject(ExpensheadService);
  private fb = inject(FormBuilder,);
  visible: boolean = false;
  isEdit: boolean = false;
  currentExpenseId: number | null = null;
  expenses!: LpgRate[];

  expensForm = this.fb.group({
    id: [0],
    date: ['', Validators.required],
    rate: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getExpens();
  }

  getExpens(){
 this.expensHeadService.getHeadExpense().subscribe(res=>{
  this.expenses = res;  
 });
  }

  
      // Reset the form
    resetForm() {
      this.expensForm.reset();
      this.currentExpenseId = null;
    }

  // Method to open the modal for adding/editing expense heads
  toggleLiveDemo() {
    this.visible = !this.visible;
   this.resetForm();
  }

  // Handle modal visibility change
  handleLiveDemoChange(visible: boolean) {
    this.visible = visible;
  }
 // Add or Edit an expense head
 onSubmit() {
  const expenseHead: LpgRate = {
    id: this.expensForm.value.id === null ? undefined : this.expensForm.value.id,
    date: this.expensForm.value.date === null ? undefined : this.expensForm.value.date,
    rate: this.expensForm.value.rate === null ? undefined : this.expensForm.value.rate,
  };

  if (this.isEdit && this.currentExpenseId !== null) {
    // Call service to update the expense head
    this.expensHeadService.updateExpense(this.currentExpenseId, expenseHead).subscribe(response => {
      // this.updateLocalList(this.currentExpenseId, expenseHead);
      this.visible = false;
      this.getExpens();
      this.resetForm();
    });
  } else {
    // Call service to add new expense head
    this.expensHeadService.addExpens(expenseHead).subscribe(response => {
      this.visible = false;
      this.getExpens();
      this.resetForm();
    });
  }
}

    // Method to edit an existing expense
    editExpense(expense: LpgRate) {
      this.isEdit = true;
      this.currentExpenseId = expense.id!;
      this.expensForm.patchValue(expense); // Populate the form with the selected expense head's data
      this.visible = true; // Open the modal for editing
    }

     // Update the local list after edit
  updateLocalList(id: number, updatedExpense: LpgRate) {
    const index = this.expenses.findIndex(e => e.id === id);
    if (index !== -1) {
      this.expenses[index] = updatedExpense;
    }
  }

   // Method to delete an expense
   deleteExpense(id: number) {
    if (confirm('Are you sure you want to delete this expense?')) {
      this.expensHeadService.deleteExpens(id).subscribe(() => {
        this.expenses = this.expenses.filter(e => e.id !== id); // Remove the deleted item from the list
        this.getExpens();
      });
    }
  }
 
    // Print the list of expenses
    printTable() {
      const printContent = document.getElementById('print-section');
      const WindowPrt = window.open('', '', 'width=900,height=650');
      WindowPrt?.document.write(printContent?.innerHTML || '');
      WindowPrt?.document.close();
      WindowPrt?.focus();
      WindowPrt?.print();
      WindowPrt?.close();
    }
}
