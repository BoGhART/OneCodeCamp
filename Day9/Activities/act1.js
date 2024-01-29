// //1
class Item {
    constructor(name, price, stock) {
    //properties
      this.name = name;
      this.price = price;
      this.stock = stock;
      this.sold = 0;
    }
    
    //display details
    logDetails() {
      console.log(`Item: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Sold: ${this.sold}`);
    }
  
    //buy function increase sold, decrease stock
    buy() {
    //check if in stock
      if (this.stock > 0) {
        console.log("Buying");
        this.sold ++;
        this.stock --;
      } else {
        console.log("Out of stock");
      }
    }
  
    //return function decrease sold, increase stock
    return() {
    //check if sold item return avail
      if (this.sold > 0) {
        console.log("Returning");
        this.sold --;
        this.stock ++;
      } else {
        console.log("No items to return");
      }
    }
  }

  const item1 = new Item("Coffee", 10, 15);
  
  item1.buy();
  item1.buy();
  item1.buy();
  item1.return();
  item1.logDetails();
  
  item1.buy();
  item1.buy();
  item1.return();
  item1.return();
  item1.logDetails();
  
  item1.return();
  item1.return();
  item1.return();
  item1.logDetails();
  

// // 2
// class House {
//     constructor() {
//       // user input for house attributes
//       this.location = this.getInput("Location");
//       this.price = parseFloat(this.getInput("Price"));
//       this.lot = this.getInput("Lot size");
//       this.type = this.getInput("Type (Pre-selling or Ready for Occupancy)");
  
//       // discount based on the house type
//       this.discount = (this.type === "Pre-selling") ? 0.2 : 0.05;
  
//       // Display details about the house
//       this.showDetails();
//     }
  
//     getInput(prompt) {
//       // user input using the prompt
//       return window.prompt(`${prompt}: `);
//     }

//     showDetails() {
//       //total price with discount
//       const discountedPrice = this.price * (1 - this.discount);
//       //details about the house
//       console.log(`Location: ${this.location}\nPrice: $${this.price}\nLot: ${this.lot}\nType: ${this.type}\nDiscount: ${this.discount * 100}%\nTotal Price: ${discountedPrice}`);
//     }
// }
  
// // Create an instance
// new House();  

// //3
// class EmailBuilder {
//     constructor() {
//       // Initialize email components
//       this.email = {
//         recipient: '',
//         subject: '',
//         body: '',
//         attachments: []
//       };
  
//       // Build the email message by chaining methods
//       this.setRecipient()
//         .setSubject()
//         .setBody()
//         .addAttachments()
//         .send();
//     }
  
//     // Set recipient for the email
//     setRecipient() {
//       this.email.recipient = this.getInput('Recipient');
//       return this; 
//     }
  
//     // Set subject for the email
//     setSubject() {
//       this.email.subject = this.getInput('Subject');
//       return this;
//     }
  
//     // Set body for the email
//     setBody() {
//       this.email.body = this.getInput('Body');
//       return this;
//     }
  
//     // Add attachments?
//     addAttachments() {
//       let attachment;
//       while ((attachment = this.getInput('Attachment (enter to proceed)')) !== '') {
//         this.email.attachments.push(attachment);
//       }
//       return this;
//     }
  
//     // Send the email and log details
//     send() {
//       console.log('Sending Email:');
//       console.log('Recipient:', this.email.recipient);
//       console.log('Subject:', this.email.subject);
//       console.log('Body:', this.email.body);
//       console.log('Attachments:', this.email.attachments);
//     }
  
//     //user input using prompt
//     getInput(prompt) {
//       return window.prompt(`${prompt}: `);
//     }
//   }
  
//   // Create an instance
//   const emailBuilder = new EmailBuilder();
  
  