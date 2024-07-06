import { safeStorage } from "electron";
import Store from "electron-store";
import { ipcMain } from "electron";
import { AuthClient } from "azuriom-auth";

const store = new Store();

export async function signIn(data) {

    /*const client = new AuthClient('<url of your website>')

    let result = await client.login(data.email, data.password)

    if (result.status === 'pending' && result.requires2fa) {
        return {
            status: 'pending',
            requires2fa: true
        }
    }

    if (result.status !== 'success') {
        throw 'Unexpected result: ' + JSON.stringify(result)
    }*/

    return {
        status: "pending",
        requires2fa: true
    }

}

ipcMain.handle('signIn', async (event, data) => {
    const result = await signIn(data)
    return result
  })