import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/shared/person.model';
import { MatTableDataSource} from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { UpdatePersonComponent } from '../update-person/update-person.component';
import { DeletePersonComponent } from '../delete-person/delete-person.component';
import { query } from '@angular/animations';


@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})

export class ListPersonComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['Given name', 'Family name', 'Gender', 'Birthdate', 'Update', 'Delete'];
  dataSource!: MatTableDataSource<any>;
  @Input() person?: Person;

  constructor(private afs: AngularFirestore, 
    public personService: PersonService<Person>, 
    public dialog: MatDialog,
    ) { }

  ngOnDestroy(): void {
    console.log("destroy")  
}

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.afs.collection('PersonCollection').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(UpdatePersonComponent, {
      width: '600px',
      height: '400px',
      data: data
    });
  }

  openDeleteDialog(data: any): void {
    const deleteDialog = this.dialog.open(DeletePersonComponent, {
      width: '500px',
      height: '300px',
      data: data
    });
  }

}
