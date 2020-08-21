const mongoose = require('mongoose');

const TermSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      default:
        '<h2>Information Collection And Use</h2>While using our Service, we may ask you to provide us with certain personallyidentifiable information that can be used to contact or identify you. Personallyidentifiable information (“Personal Information”) may include, but is notlimited to:&nbsp;<br>Name&nbsp;<br>Email address&nbsp;<br>Which is sentwhen you contact us via the form.&nbsp; And your email when you subscribe to ournewsletter<br><h2>Log Data</h2>We collect information that your browser sends whenever you visit our Service(“Log Data”). This Log Data may include information such as your computer’sInternet Protocol (“IP”) address, browser type, browser version, the pages ofour Service that you visit, the time and date of your visit, the time spent onthose pages and other statistics.&nbsp;<br><h2>Cookies</h2>Cookies are files with small amount of data, which may include an anonymousunique identifier. Cookies are sent to your browser from a web site and storedon your computer’s hard drive.&nbsp;<br>We use “cookies” to collectinformation. You can instruct your browser to refuse all cookies or to indicatewhen a cookie is being sent. However, if you do not accept cookies, you may notbe able to use some portions of our Service.&nbsp;<br><h2>Service Providers</h2>We may employ third party companies and individuals to facilitate our Service,to provide the Service on our behalf, to perform Service-related services or toassist us in analyzing how our Service is used.&nbsp;<br>These third partieshave access to your Personal Information only to perform these tasks on ourbehalf and are obligated not to disclose or use it for any other purpose.&nbsp;<h2>Security</h2><p>  The security of your Personal Information is important to us, but remember  that no method of transmission over the Internet, or method of electronic  storage is 100% secure. While we strive to use commercially acceptable means  to protect your Personal Information, we cannot guarantee its absolute  security.&nbsp;<br></p><h2>Links To Other Sites</h2>Our Service may contain links to other sites that are not operated by us. If youclick on a third party link, you will be directed to that third party’s site. Westrongly advise you to review the Privacy Policy of every site youvisit.&nbsp;<br>We have no control over, and assume no responsibility for thecontent, privacy policies or practices of any third party sites orservices.&nbsp;<br><h2>Children’s Privacy</h2>Our Service does not address anyone under the age of 18 (“Children”).&nbsp;<br>Wedo not knowingly collect personally identifiable information from children under18. If you are a parent or guardian and you are aware that your child hasprovided us with Personal Information, please contact us. If we discover that achild under 18 has provided us with Personal Information, we will delete suchinformation from our servers immediately.&nbsp;<br><h2>Changes To This Privacy Policy</h2>We may update our Privacy Policy from time to time. We will notify you of anychanges by posting the new Privacy Policy on this page.&nbsp;<br>You areadvised to review this Privacy Policy periodically for any changes. Changes tothis Privacy Policy are effective when they are posted on this page.&nbsp;<br>ContactUs<br>If you have any questions about this Privacy Policy, please contactme.&nbsp;&nbsp;<br>Via email<br>/p&gt;'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Term', TermSchema);