// import nodemailer from 'nodemailer';



// const emailTransporter = async (usuario) => {

//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     await transporter.sendMail({
//         from: '"Barbería Ollin" <barberiaollin@gmail.com>',
//         to: usuario.email,
//         subject: "¡Bienvenido a Barbería Ollin!",
//         html: `
//         <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;background-image: url('https://i.postimg.cc/68D9z9NH/barberia-fondo.png'); background-size: cover; background-repeat: no-repeat; background-position: center center;" width="100%">
//             <tbody>
//                 <tr>
//                     <td align="center" bgcolor="#ffffff" style="padding: 40px 0;">
//                         <table border="0" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px" width="600">
//                             <tbody>
//                                 <tr>
//                                     <td align="center">
//                                         <img src="https://i.postimg.cc/nXngMHry/logo-barberia.png" style="display:block;width:150px;height:auto;" alt="Logo Barbería Ollin">
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td align="center" style="padding-top:20px;">
//                                         <h1 style="font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:38px;font-weight:bold;color:#4b4b4b;margin:0;">
//                                             ¡Bienvenido ${usuario.nombres.toUpperCase()} a Barbería Ollin!
//                                         </h1>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td align="center" style="padding-top:16px;">
//                                         <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;color:#777777;text-align:center;max-width:380px;margin:0;">
//                                             Gracias por registrarte en Barbería Ollin. Estamos emocionados de tenerte con nosotros y de poder ofrecerte la mejor experiencia en cuidado personal.
//                                         </p>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td align="center" style="padding-top:16px;">
//                                         <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;color:#777777;text-align:center;max-width:380px;margin:0;">
//                                             ¡Esperamos verte pronto en nuestra barbería!
//                                         </p>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td align="center" style="padding-top:30px;">
//                                         <a href="https://www.instagram.com/barberiaollin/" style="color:#a7a7a7" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/duolingo/&amp;source=gmail&amp;ust=1680106173146000&amp;usg=AOvVaw14Hw1bjIJxcxwLmJmJkJHx"><img alt="Instagram" height="auto" src="https://ci3.googleusercontent.com/proxy/RfiWmOL8tZiBtAVtByvEJrvgGfr5kWT5yS9uNmrJQ5_UdwTXdtyL_ywzQijrgoMkS7uTFhTWDSu-JnXe3itbFJo-4qE=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Instagram.png" style="display:block;border:0" width="25" class="CToWUd" data-bit="iit">
//                                         </a>
//                                         </td>
//                                         <td align="center" style="padding-top:30px;">
//                                         <a href="https://www.facebook.com/profile.php?id=100063043911265" style="color:#a7a7a7" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/duolingo&amp;source=gmail&amp;ust=1680106173147000&amp;usg=AOvVaw2ekMVj9Wsao84g_IUIQVJM"><img alt="Facebook" height="auto" src="https://ci3.googleusercontent.com/proxy/lDP515ageK0gC1NAKnESFQB2-boG4D7Mtu1C8zJyaXbdfLnlY1cx1c775c-k4nGm9qjEoE8EOvTYq9cS6wojR-_2qg=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Facebook.png" style="display:block;border:0" width="25" class="CToWUd" data-bit="iit">
//                                         </a>
//                                         </td>
//                                 </tr>
//                                 <tr>
//                                     <td align="center" style="padding-top:40px;">
//                                         <p style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:15px;color:#a7a7a7;text-align:center;margin:0;">
//                                             Barbería Ollin | Cra. 16a #41-04, Montería | +57 304 5580585
//                                         </p>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td height="50" style="height:50px;min-height:50px;line-height:50px;font-size:1px;border-bottom:2px solid #f2f2f2">&nbsp;</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//         `
//     });
// };

// export default emailTransporter;

import nodemailer from 'nodemailer';

const emailTransporter = async (usuario) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: '"Barbería Ollin" <barberiaollin@gmail.com>',
        to: usuario.email,
        subject: "¡Bienvenido a Barbería Ollin!",
        html: `
        <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;background-image: url('https://i.postimg.cc/68D9z9NH/barberia-fondo.png'); background-size: cover; background-repeat: no-repeat; background-position: center center;" width="100%">
            <tbody>
                <tr>
                    <td align="center" bgcolor="#ffffff" style="padding: 40px 0;">
                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px" width="600">
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <img src="https://i.postimg.cc/nXngMHry/logo-barberia.png" style="display:block;width:150px;height:auto;" alt="Logo Barbería Ollin">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-top:20px;">
                                        <h1 style="font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:38px;font-weight:bold;color:#4b4b4b;margin:0;">
                                            ¡Bienvenido ${usuario.nombres.toUpperCase()} a Barbería Ollin!
                                        </h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-top:16px;">
                                        <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;color:#777777;text-align:center;max-width:380px;margin:0;">
                                            Gracias por registrarte en Barbería Ollin. Estamos emocionados de tenerte con nosotros y de poder ofrecerte la mejor experiencia en cuidado personal.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-top:16px;">
                                        <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;color:#777777;text-align:center;max-width:380px;margin:0;">
                                            ¡Esperamos verte pronto en nuestra barbería!
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-top:30px;">
                                        <div style="text-align: center;">
                                            <a href="https://www.instagram.com/barberiaollin/" style="display:inline-block;margin:0 10px;" target="_blank">
                                                <img alt="Instagram" height="auto" src="https://ci3.googleusercontent.com/proxy/RfiWmOL8tZiBtAVtByvEJrvgGfr5kWT5yS9uNmrJQ5_UdwTXdtyL_ywzQijrgoMkS7uTFhTWDSu-JnXe3itbFJo-4qE=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Instagram.png" style="display:block;border:0" width="25">
                                            </a>
                                            <a href="https://www.facebook.com/profile.php?id=100063043911265" style="display:inline-block;margin:0 10px;" target="_blank">
                                                <img alt="Facebook" height="auto" src="https://ci3.googleusercontent.com/proxy/lDP515ageK0gC1NAKnESFQB2-boG4D7Mtu1C8zJyaXbdfLnlY1cx1c775c-k4nGm9qjEoE8EOvTYq9cS6wojR-_2qg=s0-d-e1-ft#http://dzvpwvcpo1876.cloudfront.net/Facebook.png" style="display:block;border:0" width="25">
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-top:40px;">
                                        <p style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:15px;color:#a7a7a7;text-align:center;margin:0;">
                                            Barbería Ollin | Cra. 16a #41-04, Montería | +57 304 5580585
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="50" style="height:50px;min-height:50px;line-height:50px;font-size:1px;border-bottom:2px solid #f2f2f2">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        `
    });
};

export default emailTransporter;

