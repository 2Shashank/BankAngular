import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'bbb-managebranch',
  standalone: false,
  templateUrl: './managebranch1.html',
  styleUrl: './managebranch.css',
})
export class Managebranch {
  branches: any[] = [];
  searchtext: any;
  editId: number | null = null;
  respSave:any;

  constructor(private api: Apiservice,private toast:ToastService) {}

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches() {
    this.api.getBranches().subscribe({
      next: (data: any) => {
        console.log('Branches:', data);
        this.branches = data;
      },
      error: (err) => {
        console.error('Error fetching branches:', err);
        this.toast.show("Error fetching branches",'danger');
      },
    });
  }

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.branches.sort((a: any, b: any) => {
      const valA = a[column]?.toString().toLowerCase();
      const valB = b[column]?.toString().toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  updateBranch = {
    branchId: 0,
    branchName: '',
    baddress: ''
  };
  cancelEdit() {
    this.editId = null;
    this.getBranches();
  }
  saveBranch(br:any) {
    this.updateBranch = {
    branchId: br.branchId,
    branchName: br.branchName,
    baddress: br.baddress
  };
    if(!this.updateBranch.branchName || !this.updateBranch.baddress)
    console.log(this.updateBranch);
    this.api.updateBranch(this.updateBranch.branchId,this.updateBranch).subscribe({
      next:(res:any) => {
        console.log("Branch updated successfully");
        if(res.message){
          this.toast.show(res.message,'success');
        }else{
          this.toast.show("Branch updated successfully",'success');
        }
        this.editId = null;
        this.getBranches();
      },
      error:(err) => {
        console.error("Error updating branch",err);
        this.toast.show(err.error,'danger');
      }
    })
    
  }

  showAddForm = false;
  newBranch = { branchName: '', baddress: '' };
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    this.newBranch = { branchName: '', baddress: '' };
  }
  saveNewBranch() {
    if (!this.newBranch.branchName || !this.newBranch.baddress) return;
    const newEntry = {
      branchName: this.newBranch.branchName,
      baddress: this.newBranch.baddress,
    };
    this.api.addBranch(newEntry).subscribe({
      next:(res:any) => {
        // alert("Branch added successfully");
        // this.toast.show(res.message,'success');
        this.respSave = res;
        if (this.respSave['message']) {
          this.toast.show(this.respSave.message, 'success');
        } else {
          this.toast.show('Branch added successfully from!', 'success');
          console.log(res);
        }
        this.getBranches();
        this.toggleAddForm();
      },
      error:(err) => {
        console.error("Error occured while adding branch",err);
        this.toast.show(err.error,'danger');
      }
    })
  }
}
