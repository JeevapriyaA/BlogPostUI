import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../services/confirm-dialog.service';
declare var $: any;
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {



  constructor(private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
  }
}
