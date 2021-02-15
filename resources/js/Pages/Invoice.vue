<template>
  <div id="app" ref="testHtml">
   <v-app-bar
    id="app-bar"
    app
    color="transparent"
    flat
    height="40"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      @click="goBack"
      small
      
    >
      
      <v-icon >
        mdi-arrow-left
      </v-icon>
      
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      
    />

    

    <v-spacer />

    
    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      text
      @click="generateReport"
      
      
    >
      <v-icon>mdi-view-dashboard</v-icon>
      Imprimer
    </v-btn>

   
    <v-btn
      class="ml-2"
      min-width="0"
      text
      
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
  
  <v-main id="print" style="margin-top:-30px !important">
  
    <div style="" >
      <div class="invoice-box page" style="background-image:url('/images/bg.jpg');background-size: cover;">
          <br>
          <br>

            <table class="left" style="">
            <tr style="width:50%">
              <td style="display:none">
                
              </td>
              <td style="display:none">
                رقم تسلسلي
              </td>
            </tr>
            
            <tr>
              
              
              <td style="border:none !important">
              <table>
                  <tr>
                    <td class="flex-item" style="width:100%"> 
                      
                      <div>
                      Bureau de depot :  
                      </div>
                      <div>
                        Bureau {{coli['client']['wilaya']['nom']}}
                      </div>
                      <div>

                      مكتب الايداع 
                      
                      </div>
                </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <tr style="width:100%" class="flex-item">
                        <td style="height:100%;border:none !important;" class="flex-item">

                          <div>
                          L'heure :  
                        </div>
                        <div>
                          
                        </div>
                        <div>

                          : الساعة
                        
                        </div>
                          
                        
                        </td>
                        <td style="border:none !important;border-left: 1px solid  !important" class="flex-item">
                          
                          <div>
                            date de dépôt :  
                          </div>
                          <div>
                            {{coli['created_at']}}
                          </div>
                          <div>

                            : تاريخ الإيداع
                        
                          </div>
                          
                          
                          </td>
                      </tr>

                    </td>

                  </tr>
                  <tr>
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          L'expéditeur :  
                        </div>
                        <div>
                        {{coli['client']['nom']}} {{coli['client']['prenom']}}
                        </div>
                        <div>

                          : المرسل
                        
                        </div>
                      </td>
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          L'entreprise :  
                        </div>
                        <div>
                          
                        </div>
                        <div>

                          : الشركة
                        
                        </div>
                      </td>
                  </tr>
                  <tr style="">
                    <td>
                      <tr style="width:100%" class="flex-item">
                        <td style="height:100%;border:none !important;border-right: 1px solid  !important;" class="flex-item">

                          <div>
                          wilaya :  
                        </div>
                        <div>
                          {{coli['client']['wilaya']['nom']}}
                        </div>
                        <div>

                          : الولاية
                        
                        </div>
                          
                        
                        </td>
                        <td style="border:none !important" class="flex-item">
                          
                          <div>
                            commune :  
                          </div>
                          <div>
                            {{coli['client']['commune']['nom']}}
                          </div>
                          <div>

                            : البلدية
                        
                          </div>
                          
                          
                          </td>
                      </tr>

                    </td>
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;height:70px"> 
                        <div>
                          L'adresse :  
                        </div>
                        <div>
                          <br>
                          {{coli['client']['adresse']}}
                        </div>
                        <div>

                          : العنوان
                        
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          Code postale :  
                        </div>
                        <div>
                          {{coli['codePostale']}}
                        </div>
                        <div>

                          : الرمز البريدي
                        
                        </div>
                      </td>
                    
                  </tr>
                  <tr>
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          Numero de telephone :  
                        </div>
                        <div>
                          {{coli['client']['telephone']}}
                        </div>
                        <div>

                          : رقم الهاتف
                        
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td class="flex-item"  style="width:100%;" >
                      <div style="margin-left:30px">
                      وثيقة
                      </div>
                      <div  style="margin-left:30px">
                        طرد
                      </div>
                      <div>
                      : اذا كان طردا يرجى ارفاق الفاتورة الشكلية وتكملة الاتي
                      </div>
                      
                    </td>
                  </tr>
                  <tr >
                    <td  style="border:none !important">
                      <table>
                        <colgroup>
                          <col span="1" style="width: 80%;">
                          <col span="1" style="width: 20%;">
                        </colgroup>
                        <tbody>
                          <td>المحتوى</td>
                          <td>العدد</td>
                        </tbody>
                          <tr>
                            <td style="height:30px"></td>
                            <td style="height:30px"></td>
                          </tr>
                          <tr>
                            <td style="height:30px"></td>
                            <td style="height:30px"></td>
                          </tr>
                          <tr>
                            <td style="height:30px"></td>
                            <td style="height:30px"></td>
                          </tr>
                      </table>
                    </td>
                  </tr>
                  <tr style="padding:20px">
                      <td class="flex-item" style="width:100%;height:150px;border:none">
                      <div>
                        التوقيع 
                      </div>
                      <div>
                        اصرح بصحة المعلومات الواردة أعلاه وأضمن عدم احتواء الطرد أي شيء خطير أو ممنوع

                      </div>
                      </td>
                  </tr>

                </table>

              </td>
              
              <!-- td   first --> 
              
              <td style="border:none !important">
                <table>
                  <tr style="text-align:center">
                    <barcode :value="coli['ref']"  class="mt-0" height:2 width:2>
                      {{coli['ref']}}
                    </barcode>
                  </tr>
                  <tr >
                    <td class="flex-item" style="width:100%;margin-top:8px"> 
                      
                      <div>
                      Le destinataire :  
                      </div>
                      <div>
                      {{coli['nomclient']}} 
                      </div>
                      <div>

                        : المرسل اليه
                      
                      </div>
                      </td>
                  </tr>
                  <tr>
                    <td class="flex-item" style="width:100%"> 
                        <div>
                          Entreprise :  
                        </div>
                        <div>
                          
                        </div>
                        <div>

                          : شركة
                        
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <tr style="width:100%" class="flex-item">
                        <td style="height:100%;border:none !important;border-right: 1px solid  !important;" class="flex-item">

                          <div>
                          wilaya :  
                        </div>
                        <div>
                          {{coli['wilaya']['nom']}}
                        </div>
                        <div>

                          : الولاية
                        
                        </div>
                          
                        
                        </td>
                        <td style="border:none !important" class="flex-item">
                          
                          <div>
                             commune :  
                          </div>
                          <div>
                            {{coli['commune']['nom']}}
                          </div>
                          <div>

                            : البلدية
                        
                          </div>
                          
                          
                          </td>
                      </tr>

                    </td>
                    
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;height:70px"> 
                        <div>
                          L'adresse :  
                        </div>
                        <div>
                          <br>
                        {{coli['adresse']}}
                        </div>
                        <div>

                          : العنوان
                        
                        </div>
                      </td>
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          Code postale :  
                        </div>
                        <div>
                          {{coli['codePostal']}}
                        </div>
                        <div>

                          : الرمز البريدي
                        
                        </div>
                      </td>
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          Numero de telephone :  
                        </div>
                        <div>
                          {{coli['telephone']}}
                        </div>
                        <div>

                          : رقم الهاتف
                        
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <tr style="width:100%" class="flex-item">
                        
                          <table style="width:50% !important">
                            <tr>
                              <td class="flex-item" style="width:100%;"> 
                                <div>
                                  
                                </div>
                                <div>

  {{coli['poids']}}   KG                              : الوزن
                                
                                </div>
                              </td>
                            </tr>
                            <tr style="width:100%">
                                <td class="flex-item" style="width:100%;"> 

                                  <div>
                                    
                                  </div>
                                  <div>

                                    : عدد الطرود
                                  
                                  </div>
                                </td>
                            </tr>
                            <tr>
                              <td class="flex-item" style="width:100%;"> 
                                <div>
                                  Prix :  
                                </div>
                                <div>
                                  {{coli['prix']}}
                                </div>
                                <div>

                                  : القيمة
                                
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="flex-item" style="width:100%;"> 
                                <div>
                                  Frais Livraison
                                </div>
                                <div>
                                  {{coli['fraisLivraison']}} 
                                </div>
                                <div>

                                  : سعر التوصيل 
                                
                                </div>
                              </td>
                            </tr>
                          </table>
                          
                        
                          <td style="border:none !important;height:100px;" class="flex-item">
                            
                            <div style="height:100px !important">
                              La signature :  
                            </div>
                            
                            <div>

                              : التوقيع
                          
                            </div>
                            
                            
                          </td>
                      </tr>

                    </td>
                    
                  </tr>
                </table>

              </td>
            
            </tr>
            </table>
          
      </div>
    </div>
  <div class="page-block"></div>  
  </v-main>
  <v-main id="print" style="margin-top:-20px !important;" v-for="coli in colis " :key="coli['id_colis']">
  
  <div style="margin-top:-50px !important;" >
     <div class="page-block"></div>
        <div class="invoice-box page" style="background-image:url('/images/bg.jpg');background-size: cover;">
          <br>
          <br>

            <table class="left" style="">
            <tr style="width:50%">
              <td style="display:none">
                
              </td>
              <td style="display:none">
                رقم تسلسلي
              </td>
            </tr>
            
            <tr>
              
              
              <td style="border:none !important">
              <table>
                  <tr>
                    <td class="flex-item" style="width:100%"> 
                      
                      <div>
                      Bureau de depot :  
                      </div>
                      <div>
                        Bureau {{coli['client']['wilaya']['nom']}}
                      </div>
                      <div>

                      مكتب الايداع 
                      
                      </div>
                </td>
                  </tr>
                  
                  <tr>
                    <td>
                      <tr style="width:100%" class="flex-item">
                        <td style="height:100%;border:none " class="flex-item">

                          <div>
                          L'heure :  
                        </div>
                        <div>
                          something
                        </div>
                        <div>

                          : الساعة
                        
                        </div>
                          
                        
                        </td>
                        <td style="border:none !important;border-left: 1px solid  !important" class="flex-item">
                          
                          <div>
                            date de dépôt :  
                          </div>
                          <div>
                            {{coli['created_at']}}
                          </div>
                          <div>

                            : تاريخ الإيداع
                        
                          </div>
                          
                          
                          </td>
                      </tr>

                    </td>

                  </tr>
                  <tr>
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          L'expéditeur :  
                        </div>
                        <div>
                        {{coli['client']['nom']}} {{coli['client']['prenom']}}
                        </div>
                        <div>

                          : المرسل
                        
                        </div>
                      </td>
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          L'entreprise :  
                        </div>
                        <div>
                          
                        </div>
                        <div>

                          : الشركة
                        
                        </div>
                      </td>
                  </tr>
                  <tr style="">
                    <td>
                      <tr style="width:100%" class="flex-item">
                        <td style="height:100%;border:none !important;border-right: 1px solid  !important;" class="flex-item">

                          <div>
                          La wilaya :  
                        </div>
                        <div>
                          {{coli['client']['wilaya']['nom']}}
                        </div>
                        <div>

                          : الولاية
                        
                        </div>
                          
                        
                        </td>
                        <td style="border:none !important" class="flex-item">
                          
                          <div>
                            La commune :  
                          </div>
                          <div>
                            {{coli['client']['commune']['nom']}}
                          </div>
                          <div>

                            : البلدية
                        
                          </div>
                          
                          
                          </td>
                      </tr>

                    </td>
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;height:80px"> 
                        <div>
                          L'adresse :  
                        </div>
                        <div>
                          <br>
                          {{coli['client']['adresse']}}
                        </div>
                        <div>

                          : العنوان
                        
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          Code postale :  
                        </div>
                        <div>
                          {{coli['codePostal']}}
                        </div>
                        <div>

                          : الرمز البريدي
                        
                        </div>
                      </td>
                    
                  </tr>
                  <tr>
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          Numero de telephone :  
                        </div>
                        <div>
                          {{coli['client']['telephone']}}
                        </div>
                        <div>

                          : رقم الهاتف
                        
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td class="flex-item"  style="width:100%;" >
                      <div style="margin-left:30px">
                      وثيقة
                      </div>
                      <div  style="margin-left:30px">
                        طرد
                      </div>
                      <div>
                      : اذا كان طردا يرجى ارفاق الفاتورة الشكلية وتكملة الاتي
                      </div>
                      
                    </td>
                  </tr>
                  <tr>
                    <td style="width:100%;border:none !important">
                      <table>
                        <colgroup>
                          <col span="1" style="width: 80%;">
                          <col span="1" style="width: 20%;">
                        </colgroup>
                        <tbody>
                          <td>المحتوى</td>
                          <td>العدد</td>
                        </tbody>
                          <tr>
                            <td style="height:30px"></td>
                            <td style="height:30px"></td>
                          </tr>
                          <tr>
                            <td style="height:30px"></td>
                            <td style="height:30px"></td>
                          </tr>
                          <tr>
                            <td style="height:30px"></td>
                            <td style="height:30px"></td>
                          </tr>
                      </table>
                    </td>
                  </tr>
                  <tr style="padding:20px">
                      <td class="flex-item" style="width:100%;height:150px;border:none">
                      <div>
                        التوقيع 
                      </div>
                      <div>
                        اصرح بصحة المعلومات الواردة أعلاه وأضمن عدم احتواء الطرد أي شيء خطير أو ممنوع

                      </div>
                      </td>
                  </tr>

                </table>

              </td>
              
              <!-- td   first --> 
              
              <td style="border:none !important">
                <table>
                  <tr style="text-align:center">
                    <barcode :value="coli['ref']"  class="mt-0" height:2 width:2>
                      {{coli['ref']}}
                    </barcode>
                  </tr>
                  <tr >
                    <td class="flex-item" style="width:100%;margin-top:8px"> 
                      
                      <div>
                      Le destinataire :  
                      </div>
                      <div>
                      {{coli['nomclient']}} 
                      </div>
                      <div>

                        : المرسل اليه
                      
                      </div>
                      </td>
                  </tr>
                  <tr>
                    <td class="flex-item" style="width:100%"> 
                        <div>
                          Entreprise :  
                        </div>
                        <div>
                          
                        </div>
                        <div>

                          : شركة
                        
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <tr style="width:100%" class="flex-item">
                        <td style="height:100%;border:none !important;border-right: 1px solid  !important;" class="flex-item">

                          <div>
                          La wilaya :  
                        </div>
                        <div>
                          {{coli['wilaya']['nom']}}
                        </div>
                        <div>

                          : الولاية
                        
                        </div>
                          
                        
                        </td>
                        <td style="border:none !important" class="flex-item">
                          
                          <div>
                            La commune :  
                          </div>
                          <div>
                            {{coli['commune']['nom']}}
                          </div>
                          <div>

                            : البلدية
                        
                          </div>
                          
                          
                          </td>
                      </tr>

                    </td>
                    
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;height:80px"> 
                        <div>
                          L'adresse :  
                        </div>
                        <div>
                          <br>
                        {{coli['adresse']}}
                        </div>
                        <div>

                          : العنوان
                        
                        </div>
                      </td>
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          Code postale :  
                        </div>
                        <div>
                          {{coli['codePostale']}}
                        </div>
                        <div>

                          : الرمز البريدي
                        
                        </div>
                      </td>
                  </tr>
                  <tr style="">
                    <td class="flex-item" style="width:100%;"> 
                        <div>
                          Numero de telephone :  
                        </div>
                        <div>
                          {{coli['telephone']}}
                        </div>
                        <div>

                          : رقم الهاتف
                        
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <tr style="width:100%" class="flex-item">
                        
                          <table style="width:50% !important">
                            <tr>
                              <td class="flex-item" style="width:100%;"> 
                                <div>
                                
                                </div>
                                <div>

   {{coli['poids']}}   KG                              :    الوزن 
                                
                                </div>
                              </td>
                            </tr>
                            <tr style="width:100%">
                                <td class="flex-item" style="width:100%;"> 

                                  <div>
                                    
                                  </div>
                                  <div>

                                    : عدد الطرود
                                  
                                  </div>
                                </td>
                            </tr>
                            <tr>
                              <td class="flex-item" style="width:100%;"> 
                                <div>
                                  Prix :  
                                </div>
                                <div>
                                  {{coli['prix']}}
                                </div>
                                <div>

                                  : القيمة
                                
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="flex-item" style="width:100%;"> 
                                
                                <div>
                                 Frais Livraison
                              
                                </div>
                                <div>
                                   {{coli['fraisLivraison']}} 
                                </div>
                                <div>

                                  : سعر التوصيل 
                                
                                </div>
                              </td>
                            </tr>
                          </table>
                          
                        
                          <td style="border:none !important;height:100px;" class="flex-item">
                            
                            <div style="height:100px !important">
                              La signature :  
                            </div>
                            
                            <div>

                              : التوقيع
                          
                            </div>
                            
                            
                          </td>
                      </tr>

                    </td>
                    
                  </tr>
                </table>

              </td>
            
            </tr>
            </table>
          
        </div>
      </div>
      <div class="page-block"></div>  
  </v-main>
  
  </div>
</template>

<style>

td{
  
  width: 50%;
}
.flex-item {
  display: flex;
  justify-content: space-between;
}
table{
   
text-align: right !important;
}
.invoice-box {
  max-width: 1103px;
  max-height: 774px;
  margin: auto;
  page-break-after: auto;
  padding: 30px;
  border: 1px solid #eee;
  font-size: 13px;
  line-height: 20px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  color: #555;
}

.invoice-box table { 
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(n + 2) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.item input {
  padding-left: 5px;
}

.invoice-box table tr.item td:first-child input {
  margin-left: -5px;
  width: 100%;
}

.invoice-box table tr.total td:nth-child(2) {
  
  font-weight: bold;
}

.invoice-box input[type="number"] {
  width: 60px;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/** RTL **/
.rtl {
  direction: rtl;
  font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
}

.rtl table {
  text-align: right;
}

.left td {
  border: 1px solid #dd6d2e;
}

.rtl table tr td:nth-child(2) {
  text-align: left;
}


@media all
 {
.page-block { display:none; }
 }

@media print{

@page{
        width: 22cm;
        height: 20cm;
        margin: 0mm 0mm 0mm 0mm; 
        /* change the margins as you want them to be. */
    
}

#btn,#app-bar{
      height: 0px;
      display: none;
         
  }



.page-block { display: block; page-break-before: always; }

}
 .due{
  display:none
 };  
</style>





<script>
import VueBarcode from 'vue-barcode';
import AppBarInvoice from '../components/globals/AppBarInvoice'
export default {
  name: "App",
  props:['colis'],
  components:{
    'barcode': VueBarcode,
    AppBarInvoice
  },
  mounted(){
    this.coli=this.colis[0];
    this.colis.shift();
  
  },
  methods:{
    goBack(){
        this.$inertia.visit(route('client.colis'));
      },
      generateReport () {
      window.print();
      //var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    return true;
    }
  },
  data() {
    return {
      barcodeValue:'test',
      coli:'',
      company: {
        name: "OLA" ,
        address: "38, Bayreuther Straße, 60306, Frankfurt, Hesse, Germany."
      },
      invoice: {
        id: "",
        items: [
          {
            description: "Macbook 2019 Pro Touchbar 16'",
            price: "4000",
            quantity: "2"
          },
          {
            description: "Ford Fusion 2020",
            price: "25000",
            quantity: "1",
                //Optional
          }
        ],
        
      },
      customer: {
        name: "Stefan Doe",
        email: "stefandoe@aol.com",
        description: "Steafanie GmbH"
      },
      
    };
  }
};
</script>