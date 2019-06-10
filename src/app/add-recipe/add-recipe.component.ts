import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../serviceRecipe/recipe.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  private formData: FormData;
  private reader: any;
  private fileToUpload: any;
  private imgURL: any;

  constructor(public serviceRecipe: RecipeService) {
  }

  ngOnInit() {
  }

  handleFileInput(e) {
    /*  const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.fileToUpload = reader.result;
        }
        console.log(this.fileToUpload);
      };*/
    this.formData = new FormData();
    this.formData.append('fileToUpload', e.target.files[0]);
    this.reader = new FileReader();
    this.reader.readAsDataURL(e.target.files[0]);
    this.reader.onload = () => {
      this.imgURL = this.reader.result;
      this.fileToUpload = this.reader.result;
      console.log('poza incarcata');
      console.log(this.fileToUpload);
    };
  }

  addRecipe(nume: string, produse: string, modpreparare: string, timp: string, buget: string) {
    this.serviceRecipe.addRecipe(nume, produse, modpreparare, timp, Number(buget), this.fileToUpload);
  }
}
