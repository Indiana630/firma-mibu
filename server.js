const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/generate-signature', (req, res) => {
  const { name, position, phone, email } = req.body;
  const signature = `
  <table cellpadding="0" cellspacing="0" border="0" style="font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
  <tbody>
      <tr>
          <td>
              <table cellpadding="0" cellspacing="0" border="0" style="font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                  <tbody>
                      <tr>
                          <td style="vertical-align: top;">
                              <table cellpadding="0" cellspacing="0" border="0" style="font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                                  <tbody>
                                      <tr>
                                          <td style="text-align: center;" class="template1__ImageContainer-sc-nmby7a-0 guKKwa"><img src="https://media.discordapp.net/attachments/960164052502474772/1240627461960765440/logo2.png?ex=66473fdc&amp;is=6645ee5c&amp;hm=c355706728a980b72ea3163617ffeb8c2bc72d3a2bda055dd89ae0cddcef7e64&amp;=&amp;format=webp&amp;quality=lossless&amp;width=350&amp;height=396" role="presentation" style="display: block; max-width: 128px;" width="130" class="image__StyledImage-sc-hupvqm-0 kYkhsl"></td>
                                      </tr>
                                      <tr>
                                          <td height="30"></td>
                                      </tr>
                                      <tr>
                                          <td style="text-align: center;" class="template1__ImageContainer-sc-nmby7a-0 guKKwa"><img src="https://media.discordapp.net/attachments/960164052502474772/1240625964099305523/logo1.png?ex=66473e77&amp;is=6645ecf7&amp;hm=ff89da10ecd3696dd2f00dcf1b1cdd8189149ea4303de6bf0ee7caa016c36228&amp;=&amp;format=webp&amp;quality=lossless&amp;width=622&amp;height=238" role="presentation" style="display: block; max-width: 130px;" width="130" class="image__StyledImage-sc-hupvqm-0 kYkhsl"></td>
                                      </tr>
                                      <tr>
                                          <td height="30"></td>
                                      </tr>
                                      <tr>
                                          <td style="text-align: center;">
                                              <table cellpadding="0" cellspacing="0" border="0" style="display: inline-block; font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                                                  <tbody>
                                                      <tr style="text-align: center;">
                                                          <td>
                                                              <a href="https://www.facebook.com/asociacion.mibu" color="#d82426" style="display: inline-block; padding: 0px; background-color: rgb(216, 36, 38);" class="social-links__LinkAnchor-sc-py8uhj-2 eycpzl"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#d82426" width="24" style="background-color: rgb(216, 36, 38); max-width: 135px; display: block;" class="social-links__LinkImage-sc-py8uhj-1 eJRoSc"></a>
                                                          </td>
                                                          <td width="5">
                                                              <div></div>
                                                          </td>
                                                          <td>
                                                              <a href="https://www.instagram.com/asomibu/?hl=es" color="#d82426" style="display: inline-block; padding: 0px; background-color: rgb(216, 36, 38);" class="social-links__LinkAnchor-sc-py8uhj-2 eycpzl"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#d82426" width="24" style="background-color: rgb(216, 36, 38); max-width: 135px; display: block;" class="social-links__LinkImage-sc-py8uhj-1 eJRoSc"></a>
                                                          </td>
                                                          <td width="5">
                                                              <div></div>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </td>
                          <td width="46">
                              <div></div>
                          </td>
                          <td style="padding: 0px; vertical-align: middle;">
                              <h2 color="#000000" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0); font-weight: 600;" class="name__NameContainer-sc-1m457h3-0 gsCpOr"><span>${name}</span><span>&nbsp;</span><span></span></h2>
                              <p color="#000000" font-size="medium" style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;" class="job-title__Container-sc-1hmtp73-0 hWtcow"><span>${position}</span></p>
                              <p color="#000000" font-size="medium" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;" class="company-details__CompanyContainer-sc-j5pyy8-0 eYVggq"><span>Asociación Cultural Mibu</span></p>
                              <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                                  <tbody>
                                      <tr>
                                          <td height="30"></td>
                                      </tr>
                                      <tr>
                                          <td color="#d82426" direction="horizontal" width="auto" height="1" style="width: 100%; border-bottom: 1px solid rgb(216, 36, 38); border-left: medium; display: block;" class="color-divider__Divider-sc-1h38qjv-0 icFEOy"></td>
                                      </tr>
                                      <tr>
                                          <td height="30"></td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table cellpadding="0" cellspacing="0" border="0" style="font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                                  <tbody>
                                      <tr style="vertical-align: middle;" height="25">
                                          <td width="30" style="vertical-align: middle;">
                                              <table cellpadding="0" cellspacing="0" border="0" style="font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                                                  <tbody>
                                                      <tr>
                                                          <td style="vertical-align: bottom;"><span color="#d82426" width="11" style="display: inline-block; background-color: rgb(216, 36, 38);" class="contact-info__IconWrapper-sc-mmkjr6-1 brbfIW"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#d82426" alt="mobilePhone" width="13" style="display: block; background-color: rgb(216, 36, 38);" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 kInyhW"></span></td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                          <td style="padding: 0px; color: rgb(0, 0, 0);"><a href="tel:${phone}" color="#000000" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;" class="contact-info__ExternalLink-sc-mmkjr6-2 dExxuU"><span>${phone}</span></a></td>
                                      </tr>
                                      <tr style="vertical-align: middle;" height="25">
                                          <td width="30" style="vertical-align: middle;">
                                              <table cellpadding="0" cellspacing="0" border="0" style="font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                                                  <tbody>
                                                      <tr>
                                                          <td style="vertical-align: bottom;"><span color="#d82426" width="11" style="display: inline-block; background-color: rgb(216, 36, 38);" class="contact-info__IconWrapper-sc-mmkjr6-1 brbfIW"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#d82426" alt="emailAddress" width="13" style="display: block; background-color: rgb(216, 36, 38);" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 kInyhW"></span></td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                          <td style="padding: 0px;"><a href="mailto:${email}" color="#000000" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;" class="contact-info__ExternalLink-sc-mmkjr6-2 dExxuU"><span>${email}</span></a></td>
                                      </tr>
                                      <tr style="vertical-align: middle;" height="25">
                                          <td width="30" style="vertical-align: middle;">
                                              <table cellpadding="0" cellspacing="0" border="0" style="font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                                                  <tbody>
                                                      <tr>
                                                          <td style="vertical-align: bottom;"><span color="#d82426" width="11" style="display: inline-block; background-color: rgb(216, 36, 38);" class="contact-info__IconWrapper-sc-mmkjr6-1 brbfIW"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#d82426" alt="website" width="13" style="display: block; background-color: rgb(216, 36, 38);" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 kInyhW"></span></td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                          <td style="padding: 0px;"><a href="//www.mibu.es" color="#000000" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;" class="contact-info__ExternalLink-sc-mmkjr6-2 dExxuU"><span>www.mibu.es</span></a></td>
                                      </tr>
                                      <tr style="vertical-align: middle;" height="25">
                                          <td width="30" style="vertical-align: middle;">
                                              <table cellpadding="0" cellspacing="0" border="0" style="font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                                                  <tbody>
                                                      <tr>
                                                          <td style="vertical-align: bottom;"><span color="#d82426" width="11" style="display: inline-block; background-color: rgb(216, 36, 38);" class="contact-info__IconWrapper-sc-mmkjr6-1 brbfIW"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color="#d82426" alt="address" width="13" style="display: block; background-color: rgb(216, 36, 38);" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 kInyhW"></span></td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                          <td style="padding: 0px;"><span color="#000000" style="font-size: 12px; color: rgb(0, 0, 0);" class="contact-info__Address-sc-mmkjr6-3 jomBme"><span>Av. de Andalucía, 3, 29651 Las Lagunas de Mijas, Málaga</span></span>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table cellpadding="0" cellspacing="0" border="0" style="font-size: medium; font-family: Verdana;" globalstyles="[object Object]" class="table__StyledTable-sc-1avdl6r-0 gZiJTA">
                                  <tbody>
                                      <tr>
                                          <td height="30"></td>
                                      </tr>
                                  </tbody>
                              </table></td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody>
</table>
  `;
  res.send(signature);
});

app.listen(port, () => {
  console.log(`Servidor arrancado en http://localhost:${port}`);
});
