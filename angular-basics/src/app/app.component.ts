import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  // All fields (properties) and methods must go INSIDE the class!

  /*  
    Remember that Angular uses TypeScript, so variables and methods must be "typed" as a string, number, boolean, etc. Also notice how the fields (TypeScript variables) are NOT declared with 'let', and methods are NOT declared with 'function'. BUT once you are inside a method's brackets {}, you are using regular old JavaScript! Just make sure to refer to the class's global fields and methods with 'this.property' or 'this.method()'.
  */

  // TODO: Declare fields (as strings) called 'thingOne' and 'thingTwo' for the two things you'll be writing about.
 

  // TODO: Declare a field called 'imageURL' for the path to your image (a string). Under 'src' in the file tree, you'll see a folder called 'assets', and another folder inside that called 'images.' That's where you should put your image file.
  

  // Here's a quick method to take thingOne & thingTwo and create your title.
  createTitle(): string {
    let pageTitle = `${this.thingOne} vs ${this.thingTwo}`; // standard template literal
    return pageTitle;
  }

  // Could we have just had a single field hold the whole title name? Yes. But then we wouldn't have a handy little example of how to write a method and display it in the HTML template! :-)

} // End of class
