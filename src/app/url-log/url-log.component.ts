import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { SquirrelDisplay } from '../../models/models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-url-log',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './url-log.component.html',
  styleUrl: './url-log.component.scss'
})
export class UrlLogComponent implements OnInit {
  ngOnInit(): void {
    this.snapshot();
  }

  constructor(private host: ElementRef<HTMLElement>){

  }

  @Input() log: SquirrelDisplay = { id: '', url: '', username: '', password: '', isBeingEdited: false};
  
  id: string = '';
  url: string = ''
  username: string = ''
  password: string = ''
  
  passwordFieldType: string = 'password';
  showPasswordIcon: boolean = false;
  hasChanges: boolean = false;
  
  togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
      this.showPasswordIcon = !this.showPasswordIcon;
  }

  snapshot() {
    this.id = this.log.id+'';
    this.url = this.log.url+'';
    this.username = this.log.username+'';
    this.password = this.log.password+'';
  }

  lookUp() {
    this.log.id = this.id+'';
    this.log.url = this.url+'';
    this.log.username = this.username+'';
    this.log.password = this.password+'';
  }

  toggleEdit() {
    if (this.log.isBeingEdited && this.hasChanges){
      if (!confirm("You have unsaved changes. Do you cant to discard them?")){
        return;
      }
      this.lookUp()
      this.hasChanges = false;
    }
    var a: boolean = this.log.isBeingEdited;
    this.log.isBeingEdited = !this.log.isBeingEdited;
    var b: boolean = this.log.isBeingEdited;
  }

  save() {
    this.snapshot()
    this.hasChanges = false;
    this.log.isBeingEdited = false;
  }

  delete() {
    if (confirm('Are you sure you want to delete this password? This action cannot be undone.')) {
      this.host.nativeElement.remove();
    }
  }

  checkChanges(): boolean {
    var a: boolean = this.log.url !== this.url || this.log.username !== this.username || this.log.password !== this.password;
    this.hasChanges = a;
    return a
  }

  onUrlChange(newValue: string) {
    this.checkChanges()
  }

  onPasswordChange(newValue: string) {
    this.checkChanges()
  }

  onUsernameChange(newValue: string) {
    this.checkChanges()
  }
}
