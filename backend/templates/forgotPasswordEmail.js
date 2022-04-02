const url = "http://localhost:3000";

module.exports = `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
        <!--[if mso]>
      <style>
        table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
        div, td {padding:0;}
        div {margin:0 !important;}
        </style>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        table, td, div, h1, p {
          font-family: Arial, sans-serif;
        }
        @media screen and (max-width: 530px) {
          .unsub {
            display: block;
            padding: 8px;
            margin-top: 14px;
            border-radius: 6px;
            background-color: #555555;
            text-decoration: none !important;
            font-weight: bold;
          }
          .col-lge {
            max-width: 100% !important;
          }
        }
        @media screen and (min-width: 531px) {
          .col-sml {
            max-width: 27% !important;
          }
          .col-lge {
            max-width: 73% !important;
          }
        }
      </style>
    </head>
    <body style="margin:0;padding:0;word-spacing:normal;background-color:#939297;">
      <div role="article" aria-roledescription="email" lang="en" 
      style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;
      background-color:#939297;">
        <table role="presentation" style="width:100%;border:none;border-spacing:0;">
          <tr>
            <td align="center" style="padding:0;">
              <!--[if mso]>
              <table role="presentation" align="center" style="width:600px;">
              <tr>
              <td>
              <![endif]-->
              <table role="presentation" 
              style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
                <tr>
                  <td style="padding:40px 30px 30px 30px;text-align:center;font-size:24px;font-weight:bold;">
                    <a href="#" style="text-decoration:none;">
                    <img src="` + url + `img/logo192.png" width="165" alt="Logo" 
                    style="width:80%;max-width:165px;height:auto;border:none;text-decoration:none;
                    color:#ffffff;"></a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px;background-color:#ffffff;">
                    <h1 style="margin-top:0;margin-bottom:16px;font-size:26px;line-height:32px;font-weight:bold;letter-spacing:-0.02em;">
                    Benvenuto in Survivor Game
                    </h1>
                    <p style="margin:0;">
                    Hai richiesto il reset della password.
                    <br>
                    Clicca sul bottone per impostare una nuova password
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:5px 30px 11px 30px;font-size:0;background-color:#ffffff;
                  border-bottom:1px solid #f0f0f5;border-color:rgba(201,201,207,.35);">
                    <!--[if mso]>
                    <table role="presentation" width="100%">
                    <tr>
                    <td style="width:395px;padding-bottom:20px;" valign="top">
                    <![endif]-->
                    <div class="col-lge" style="display:inline-block;
                    width:100%;max-width:395px;vertical-align:top;
                    padding-bottom:20px;font-family:Arial,sans-serif;
                    font-size:16px;line-height:22px;color:#363636;">
                      <p style="margin:0;">
                      <a href="` + url + `/PasswordChange?email={0}&confirmationCode={1}" 
                      style="background: #ff3884; text-decoration: none; 
                      padding: 10px 25px; color: #ffffff; border-radius: 4px; display:inline-block; 
                      mso-padding-alt:0;text-underline-color:#ff3884">
                      <!--[if mso]>
                      <i style="letter-spacing: 25px;mso-font-width:-100%;mso-text-raise:20pt">&nbsp;</i>
                      <![endif]-->
                      <span style="mso-text-raise:10pt;font-weight:bold;">
                      Crea nuova password
                      </span>
                      <!--[if mso]>
                      <i style="letter-spacing: 25px;mso-font-width:-100%">&nbsp;</i><![endif]-->
                      </a>
                      </p>
                    </div>
                    <!--[if mso]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px;text-align:center;font-size:12px;background-color:#404040;color:#cccccc;">
                    <p style="margin:0 0 8px 0;">
                        <a href="http://www.facebook.com/" style="text-decoration:none;">
                            <img src="images/facebook.png" width="40" height="40" 
                            alt="f" style="display:inline-block;color:#cccccc;">
                        </a> 
                        <a href="http://www.twitter.com/" style="text-decoration:none;">
                            <img src="images/twitter.png" width="40" height="40" alt="t" 
                            style="display:inline-block;color:#cccccc;">
                        </a>
                    </p>
                    <p style="margin:0;font-size:14px;line-height:20px;">
                        &reg; Survivor Game 2021<br>
                        <a class="unsub" href="http://www.example.com/" 
                        style="color:#cccccc;text-decoration:underline;">
                        Unsubscribe instantly
                        </a>
                    </p>
                  </td>
                </tr>
              </table>
              <!--[if mso]>
              </td>
              </tr>
              </table>
              <![endif]-->
            </td>
          </tr>
        </table>
      </div>
    </body>
    </html>
    `