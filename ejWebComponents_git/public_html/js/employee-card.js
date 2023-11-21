/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const template = document.createElement('template');
template.innerHTML = `
<style>
    .employee-card {
        font-family: sans-serif;
        background: #f4f6f7;
        width: 25%;
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 10px;
    }
    .jpg {
        margin-top: -15px;
        max-width: 50%;
        height: auto;
    }
</style>
<div class="employee-card">
    <h3></h3>
    <img class="jpg" />
    <div class="details">
        <div slot="id"></div>
        <div slot="job_title"></div>
        <div slot="email"></div>
        <div slot="phone"></div>
    </div>
    <br/>
</div>`;

class EmployeeCard extends HTMLElement{
 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
     this.shadowRoot.querySelector('img').src = 'img/' + this.getAttribute('avatar');
     this.shadowRoot.querySelector('div[slot="id"]').innerHTML = '<b>ID:</b>&nbsp;' + this.getAttribute('id');
     this.shadowRoot.querySelector('div[slot="job_title"]').innerHTML = '<b>Job Title:</b>&nbsp;' + this.getAttribute('jobTitle');
     this.shadowRoot.querySelector('div[slot="email"]').innerHTML = '<b>Email:</b>&nbsp;' + this.getAttribute('email');
     this.shadowRoot.querySelector('div[slot="phone"]').innerHTML = '<b>Phone:</b>&nbsp;' + this.getAttribute('phone');
 } 

 connectedCallback(){
   /*this.h3 = this.getAttribute('name');*/
   this.render();
 }

 render(){
   this.h3;
 }
}
window.customElements.define('employee-card', EmployeeCard);


