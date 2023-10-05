export default function healtReportTempEmail(data) {
  return `
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Axzons update</title>
  
  <style type="text/css">
    body {
      margin: 0;
      background-color: white;
    }
    table {
      border-spacing: 0;
    }
    td {
      padding: 0;
    }
    img {
      border: 0;
    }
      h6{
        font-family: Arial, Helvetica, sans-serif;
        padding: 6px 6px;
      }
  
      .wrapper{
          width: 100%;
          table-layout: fixed;
          background-color: white;
          padding-bottom: 60px;
      }
  
      .main{
          background-color: #FBF2EF;
          margin: 0 auto;
          width: 100%;
          max-width: 600px;
          border-spacing: 0;
         
      }
      .footer-two-columns{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin: auto;
          text-align: center;
         
      }
      .footer-icon{
         
         display: flex;align-items: center;gap: 4px; justify-content: end;
     }
  
      @media screen and (max-width: 400px) {
          .footer-two-columns{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: auto;
          text-align: center;
         
      }
      .footer-icon{
         
           justify-content: flex-start;
      }
      }
  
  </style>
  </head>
  <body>
  
      <center class="wrapper">
          <table class="main" width="100%">
  
  
              <!-- logo section -->
  <tr>
      <td style="align-items: center; text-align: center; padding-top: 5%; margin-bottom: 0;">
          <img style="max-width: 25%; margin: auto;" src="https://www.axzonshomecare.com/assets/img/logo.png" alt="">
      </td>
    </tr>
    
    <!-- heading -->
    <tr>
      <td style="text-align: center;">
          <h6 style="color: rgb(49, 79, 80); font-size:25px;letter-spacing: 1px; margin: 15px 0 0 0; font-size: 15px;">
           
            Hello ${data.name},  Thank you for being with Axzons.Please Check your <br/>  health report.
              If you need anything, let us know.</h6>
          <h6 style="color: rgb(22, 22, 82);font-size:20px;letter-spacing: 1px;margin: 10px 0 0 0;">Have a nice day.</h6>
    
      </td>
    </tr>
    
  
  
  <!-- Table section -->
  
  
  <tr>
      <td>
          <tr style="">
              <td style="" style="padding: 20px;">
                <table class="data-table" style="border: 1px solid rgba(0, 0, 0, 0.64); width: 80%; margin: auto; margin: 5% auto;" cellpadding="0" cellspacing="0" width="100%">
          
                  <tr style="border: 1px solid black;">
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:left;  background-color: #d4aeae; font-size: 13px; font-weight: 600;">Name</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #d4aeae; font-size:13px;text-align:left; font-weight: 600;">Data</td>
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:left;  background-color: #d4aeae; font-size: 13px; font-weight: 600;border-left: 1px solid black;">Name</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #d4aeae; font-size:13px;text-align:left; font-weight: 600;">Data</td>
                  
                  </tr>
                
                  <tr style="border: 1px solid black;">
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">Height :</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">${data.height}</td>
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;; border-left: 1px solid black;">Weight :</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">${data.weight}</td>
                  
                  </tr>
  
                  <tr style="border: 1px solid black;">
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">Pulse Rate:</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">		${data.pulseRate}</td>
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;; border-left: 1px solid black;">Blood Pressure :</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">		${data.bloodPressure}</td>
                  
                  </tr>
  
                  <tr style="border: 1px solid black;">
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">Urine Test (Dipstick Test):</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">		${data.urinTest}</td>
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;; border-left: 1px solid black;">Corrent Complaints :</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">		${data.currentComplaints}</td>
                  
                  </tr>
  
                  
                  <tr style="border: 1px solid black;">
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">Blood glucose(Dipstick):</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">		${data.bloodGlucose}</td>
                    <td style="border-bottom: 1px solid black; padding: 10px 0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;; border-left: 1px solid black;">Recommended by RN :</td>
                    <td style="border-bottom: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">		${data.recomendationByRN}</td>
                  
                  </tr>
  
                  <tr style="border: 1px solid black;">
                    <td style=" padding: 10px 0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">Next follow update:</td>
                    <td style="border-right: 1px solid black; padding: 10p0 7px 10px; text-align:center;  background-color: #f2f2f2; font-size:14px;text-align:left;">		${data.nextFollowUpDate}</td>
                  
                  
                  </tr>
          
                 </table> 
             </td>
          </tr> 
      </td>
  </tr>
  
  
  
  <!-- Address section -->
  
  <tr>
      <td>
         
                 
          <div style="background-color: #c79494; padding: 10px ; margin: 0 9%; border-radius: 10px;" class="">
            
           <p style="color: rgb(255, 255, 255); text-align: center; font-weight: 600;font-size: 16px;margin-bottom: 0;"> <b>Corporate Headquarters: </b>Axzons Home Health Care </p>
            <p style="color: rgb(255, 255, 255); text-align: center;">560 hempstead turnpike west hempstead ny 11552  </p>
          </div>
    
          <div  style="padding: 10px 9%; " class="">
            <hr style="border: 1px solid rgba(177, 156, 196, 0.227);">
          </div>
      </td>
    </tr>
    
    
    <!-- footer SECTION -->
    
    <tr >
      <td style="padding:2% 6%;">
          <table width="100%">
              <tr>
                  <td class="footer-two-columns">
    
                      <table style="width: 100%;">
                          <tr>
                              <td>
                                  <div>
                                      <p style="text-align: left;font-size: 14px; margin-bottom: 5px;"> <span style="font-weight: 600;">Call:</span> 1(866)429-966 </p>
                                      <p style="text-align: left;font-size: 14px; margin-top: 0; padding-bottom: 0%;margin-bottom: 5px;"> <span style="font-weight: 600;font-size: 14px; margin-top: 0;">Email:</span> <a href="">  info@axzonshonshomecare.com</a>  </p>
                                      <p style="text-align: left;font-size: 14px; margin-top: 0; padding-bottom: 0%;"> <span style="font-weight: 600;font-size: 14px; margin-top: 0;">Website:</span> <a href="">   https://axzonshomecare.com</a>  </p>
                                    </div>
                              </td>
                          </tr>
                      </table>
    
                      <table style="width: 100%;" class="social-icon">
                          <tr>
                              <td>
                                  <div class="footer-icon" style="">
                                      <a href="https://www.linkedin.com/in/axzons-homecare-71190015a/"></a> <img style="width: 11%; margin: 0 5px;" src="https://gneqfh.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png" alt=""></a>
                                      <a href="https://www.facebook.com/axzonscare"></a> <img style="width: 11%; margin: 0 5px;" src="https://gneqfh.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png" alt=""></a>
                                      <a href="https://www.instagram.com/axzonshomecare/"></a> <img style="width: 11%; margin: 0 5px;" src="https://gneqfh.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png" alt=""></a>
                                     <a href="https://www.youtube.com/channel/UCpm8Pu6kl6IpiZCS31h5n0w/featured"></a> <img style="width: 11%; margin: 0 5px;" src="https://gneqfh.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png" alt=""></a>
                                    </div>
                              </td>
                          </tr>
                      </table>
    
                  </td>
              </tr>
          </table>
      </td>
    </tr>
  
   <!--  .......  last footer ........ -->
   <tr>
    <td style="width: 100%; padding: 15px auto; background-color: #d4aeae;">
        <p style="margin-top: 20px;padding-bottom: 15px; text-align: center; font-size: 14px; color: rgba(0,0,0,0.9); ">Copyright @ all right reserved by  <a style="text-decoration: underline; color: blue; " href="https://axzonshomecare.com/">Axzons Home Care</a> </p>
    </td>
  </tr>
  
  
  
  
    </table>
  </center>
  </body>
  </html>

    `;
}
