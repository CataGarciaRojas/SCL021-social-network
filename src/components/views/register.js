import { save } from '../../firebase/firebase.js';

export const register = () => `
    <div class="card"><img id="logoRunners" src="../../img/logo1.png" alt="Logo applicación">
    <h1>Crear Usuario</h1>
    <form class="buttonsWrapper" action="" method="post">
    <label for="email">Correo electrónico</label>
    <input  id="email"class="user" type="text">
    <label for="password">Contraseña</label>
    <input  id="password"class="user" type="password">
    <label for="repeatpassword">Repetir contraseña</label>
    <input  id="repeatpassword" class="user" type="password">
    <button type="button" onclick="save()">Registrate</button>
    <button id="linkWithGoogle" type="button" className="button"><img src="../../img/google.png" alt="Logo Google" id="linkgoogleImg"/>Vincular Cuenta con Google</button> 
    </form>
    </div>`;
