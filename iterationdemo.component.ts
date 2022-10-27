import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterationdemo',
  templateUrl: './iterationdemo.component.html',
  styleUrls: ['./iterationdemo.component.sass']
})
export class IterationdemoComponent  {
public product=[
{Name:'samsung TV',price :4500 },
{Name :'mobile',proce :200},
];
public textName;
public textPrice;
public newProduct = {Name :' '
price :0
}
public Addproduct(){
alert('product add');
this.newProduct={
  Name :this.textName,
  price :this.textPrice 



};
this.product.push(this.newProduct)
this.textName='';
this.textprice=''


}
public DeleteProduct(index){
  var states =confirm('Are you sure ,want to delete this product ?');
  if(states==true){
    this.product.splice(index,1);


  }




}


 

}
