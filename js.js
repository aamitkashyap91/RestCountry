

fetch('https://restcountries.com/v3.1/all').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+=`<table>
        <tr class="row col-lg-4"> 
          <td class="col-sm-12">
      <div class="card">
        <h5 class="card-header">${values.name.common}</h5> 
          <img src=${values.flags.png} class="card-img-top" alt="flag1">
          <p class="card-body"><b>&emsp;Capital: </b>${values.capital}</p>
          <p class="card-body"><b>Area:</b>${values.region}&emsp;&emsp; &emsp;</p>
          <p class="card-body"> <b>Country code: </b> ${values.cca2}</p>
          <p class="card-body"><b>&emsp;Population: </b>${values.population}</p><br>

          <button onclick="getpopupdata()">Click me</button>

        </div>
      </td>
     </tr>
      </table>`;

    });
    document.getElementById("container").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})




