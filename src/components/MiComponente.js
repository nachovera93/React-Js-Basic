import React,{Component} from 'react';


class MiComponente extends Component{ //asi se crea un componente en React

    render(){    //metodo render se encarga de mostrar info por pantalla

        let vida  = {

            ocupación : 'Ingeniero',
            hobbies : ['Pesas','futbol','Xbox']

        };

         return (   //el return solo puede devolver solo una etiqueta, por lo que si queremos 
                                             //devolver mas debemos usar React.Fragment
            <div className="mi-componente">
                  <h1>{'Ocupación : '+ vida.ocupación}</h1>
                  <ol>
                      {
                      vida.hobbies.map((vid,i) => {
                          return (
                              <li>
                                  {vid}
                              </li>
                          )
                       })
                     }

                  </ol>
            </div>
           
                
         );


    }

}

export default MiComponente;