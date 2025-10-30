import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';

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

  constructor(private api: Apiservice) {}

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

  cancelEdit() {
    this.editId = null;
    this.getBranches();
  }
  saveBranch(branch: any) {
    console.log(branch);
    this.api.updateBranch(branch.branchId,branch).subscribe({
      next:(res) => {
        console.log("Branch updated successfully");
        this.editId = null;
        this.getBranches();
      },
      error:(err) => {
        console.error("Error updating branch",err);
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

    // Call your backend API here (POST)
    // Example simulation:
    const newEntry = {
      // branchId: Math.floor(Math.random() * 1000), // dummy until backend returns real id
      branchName: this.newBranch.branchName,
      baddress: this.newBranch.baddress,
    };
    this.api.addBranch(newEntry).subscribe({
      next:(res) => {
        alert("Branch added successfully");
        this.getBranches();
        this.toggleAddForm();
      },
      error:(err) => {
        console.error("Error occured while adding branch",err);

      }
    })
  }
}
