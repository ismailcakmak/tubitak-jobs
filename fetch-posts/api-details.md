# https://kariyer-backend.tubitak.gov.tr/anaSayfa/YayindakiIlanlar

Tüm ilanları listeleyen api

```xml
<!-- Root element containing all job postings -->
<List>
    <!-- Each job listing item -->
    <item>
        <!-- Job posting identification and reference details -->
        <ilanDetayId>NUMERIC_ID</ilanDetayId>       <!-- Detailed posting ID -->
        <ilanId>NUMERIC_ID</ilanId>                 <!-- Job posting ID -->
        <referansKod>REFERENCE_CODE</referansKod>   <!-- Reference code -->
        
        <!-- Position information -->
        <ilanBirimi>DEPARTMENT</ilanBirimi>         <!-- Department/Unit -->
        <pozisyon>POSITION_TITLE</pozisyon>         <!-- Position title -->
        <unvan>FORMAL_TITLE</unvan>                 <!-- Formal title -->
        <personelStatu>STATUS_TYPE</personelStatu>  <!-- Personnel status type -->
        <gorevYeri>LOCATION</gorevYeri>             <!-- Location -->
        <personelSayisi>NUMBER</personelSayisi>     <!-- Number of positions -->
        <durum>STATUS</durum>                       <!-- Current status -->
        
        <!-- Detailed job description in HTML format -->
        <isinTanimi>

        </isinTanimi>
        
        <!-- Job posting period information -->
        <ilan>
            <ilanId>NUMERIC_ID</ilanId>             <!-- References the same ID as above -->
            <ilanKod>POSTING_CODE</ilanKod>         <!-- Posting code -->
            <enstitu>INSTITUTE</enstitu>            <!-- Institute -->
            <ilanBaslangicTarih>START_DATE</ilanBaslangicTarih>  <!-- Posting start date/time -->
            <ilanBitisTarih>END_DATE</ilanBitisTarih>            <!-- Posting end date/time -->
            <durum>POSTING_STATUS</durum>           <!-- Posting status -->
        </ilan>
    </item>
    
    <!-- Additional job posting items follow the same structure -->
</List>
```

```json
{
  [
      {
        "ilanDetayId": "NUMERIC_ID",
        "ilanId": "NUMERIC_ID",
        "referansKod": "REFERENCE_CODE",
        "ilanBirimi": "DEPARTMENT",
        "pozisyon": "POSITION_TITLE",
        "unvan": "FORMAL_TITLE",
        "personelStatu": "STATUS_TYPE",
        "gorevYeri": "LOCATION",
        "personelSayisi": "NUMBER",
        "durum": "STATUS",
        "isinTanimi": '
        <!-- Contains HTML content including paragraphs, lists, etc. -->
            <p>General description</p>
            <ul>
                <li>Position detail 1</li>
                <li>Position detail 2</li>
                <!-- More list items as needed -->
            </ul>',
        "ilan": {
          "ilanId": "NUMERIC_ID",
          "ilanKod": "POSTING_CODE",
          "enstitu": "INSTITUTE",
          "ilanBaslangicTarih": "START_DATE",
          "ilanBitisTarih": "END_DATE",
          "durum": "POSTING_STATUS"
        }
      }
    ]
}
```


# https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetay/1681


```xml
<!-- Root container for all job postings -->
<List>
    <!-- Individual job posting item -->
    <item>
        <!-- Job posting identification details -->
        <ilanDetayId>NUMERIC_ID</ilanDetayId>           <!-- Detailed job ID -->
        <ilanId>NUMERIC_ID</ilanId>                     <!-- Job posting ID -->
        <referansKod>REFERENCE_CODE</referansKod>       <!-- Reference code, e.g., TBTK.BİLGEM.A.2025-2.03 -->
        <ilanBirimi>DEPARTMENT</ilanBirimi>             <!-- Department, e.g., BİLGEM -->
        <pozisyon>POSITION_TITLE</pozisyon>             <!-- Position title, e.g., AR-GE PERSONELİ -->
        <unvan>FORMAL_TITLE</unvan>                     <!-- Formal title, e.g., AR-GE PERSONELİ (ARAŞTIRMACI) -->
        <personelStatu>STATUS</personelStatu>           <!-- Personnel status, e.g., Proje Personeli -->
        <gorevYeri>LOCATION</gorevYeri>                 <!-- Work location, e.g., KONYA -->
        <personelSayisi>COUNT</personelSayisi>          <!-- Number of positions -->
        <durum>STATUS</durum>                           <!-- Status, e.g., Aktif -->
        <tarih>DATE</tarih>                             <!-- Date information -->
        
        <!-- Job description in HTML format -->
        <isinTanimi>
            <!-- HTML content with paragraphs, lists, etc. -->
            <ul>
                <li>Job responsibility/description detail</li>
                <!-- Additional list items as needed -->
            </ul>
        </isinTanimi>
        
        <!-- Required qualifications in HTML format -->
        <aranacakOzelKosul>
            <!-- HTML content with ordered/unordered lists -->
            <ol>
                <li>Required qualification</li>
                <!-- Additional requirements -->
            </ol>
            <ul>
                <li>Preferred qualification</li>
                <!-- Additional preferences -->
            </ul>
        </aranacakOzelKosul>
        
        <!-- Various processing placeholders -->
        <formulParams/>
        <degerlendirmeDurumu/>
        <sonucAciklamaDurum/>
        <ilkAdayFormul/>
        <sonAdayFormul/>
        
        <!-- Detailed job posting information -->
        <ilan>
            <ilanId>NUMERIC_ID</ilanId>                     <!-- References the same job ID as above -->
            <ilanKod>POSTING_CODE</ilanKod>                 <!-- Posting code -->
            <ebysId/>                                       <!-- Electronic document system ID -->
            <ebysKonu/>                                     <!-- Electronic document subject -->
            <belgeAdi/>                                     <!-- Document name -->
            <belgeYolu/>                                    <!-- Document path -->
            <belgeAlternatifAd/>                            <!-- Alternative document name -->
            <enstitu>INSTITUTE</enstitu>                    <!-- Institute name, e.g., BİLGEM -->
            <ilanBaslangicTarih>START_DATE</ilanBaslangicTarih>  <!-- Posting start date/time -->
            <ilanBitisTarih>END_DATE</ilanBitisTarih>       <!-- Posting end date/time -->
            <durum>STATUS</durum>                           <!-- Posting status, e.g., Yayında -->
            <tarih>DATE</tarih>                             <!-- Publication date -->
            <ilanYil/>                                      <!-- Posting year -->
            <ilanMetni/>                                    <!-- Posting text -->
            <belgeSanalYol/>                                <!-- Virtual document path -->
            <maxReferansBasvurusu>COUNT</maxReferansBasvurusu>  <!-- Maximum reference applications -->
            <aranacakGenelKosulEski/>                       <!-- Old general requirements -->
            <basvuruSureciEski/>                            <!-- Old application process -->
            <servisText/>                                   <!-- Service text -->
            
            <!-- Application process details in HTML format -->
            <basvuruSureci>
                <!-- HTML content with application instructions -->
                <p>Application step</p>
                <ul>
                    <li>Required document</li>
                    <!-- Additional requirements -->
                </ul>
            </basvuruSureci>
            
            <!-- General requirements in HTML format -->
            <aranacakGenelKosul>
                <!-- HTML content explaining general requirements -->
                <p>Formula for calculating points</p>
                <img src="base64_encoded_image"/>
                <table>
                    <!-- Table structure for point criteria -->
                </table>
                <p>General eligibility requirements</p>
            </aranacakGenelKosul>
            
            <ilanYayinDurum>STATUS_CODE</ilanYayinDurum>   <!-- Publication status code -->
            <mulakatAsamaTuru/>                            <!-- Interview stage type -->
            <degerlendirmeDurumu/>                         <!-- Evaluation status -->
        </ilan>
    </item>
    
    <!-- Additional job posting items follow the same structure -->
</List>
```

```json
{
  "List": {
    "item": [
      {
        "ilanDetayId": "NUMERIC_ID",
        "ilanId": "NUMERIC_ID",
        "referansKod": "REFERENCE_CODE",
        "ilanBirimi": "DEPARTMENT",
        "pozisyon": "POSITION_TITLE",
        "unvan": "FORMAL_TITLE",
        "personelStatu": "STATUS",
        "gorevYeri": "LOCATION",
        "personelSayisi": "COUNT",
        "durum": "STATUS",
        "tarih": "DATE",
        "isinTanimi": "<ul><li>Job responsibility/description detail</li></ul>",
        "aranacakOzelKosul": "<ol><li>Required qualification</li></ol><ul><li>Preferred qualification</li></ul>",
        "formulParams": {},
        "degerlendirmeDurumu": {},
        "sonucAciklamaDurum": {},
        "ilkAdayFormul": {},
        "sonAdayFormul": {},
        "ilan": {
          "ilanId": "NUMERIC_ID",
          "ilanKod": "POSTING_CODE",
          "ebysId": {},
          "ebysKonu": {},
          "belgeAdi": {},
          "belgeYolu": {},
          "belgeAlternatifAd": {},
          "enstitu": "INSTITUTE",
          "ilanBaslangicTarih": "START_DATE",
          "ilanBitisTarih": "END_DATE",
          "durum": "STATUS",
          "tarih": "DATE",
          "ilanYil": {},
          "ilanMetni": {},
          "belgeSanalYol": {},
          "maxReferansBasvurusu": "COUNT",
          "aranacakGenelKosulEski": {},
          "basvuruSureciEski": {},
          "servisText": {},
          "basvuruSureci": "<p>Application step</p><ul><li>Required document</li></ul>",
          "aranacakGenelKosul": "<p>Formula for calculating points</p><img src=\"base64_encoded_image\"/><table></table><p>General eligibility requirements</p>",
          "ilanYayinDurum": "STATUS_CODE",
          "mulakatAsamaTuru": {},
          "degerlendirmeDurumu": {}
        }
      }
    ]
  }
}
```


# https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetayBolum/1680


```xml

<!-- Root container for all job postings -->
<List>
    <!-- Individual job listing item, repeated for each applicable department -->
    <item>
        <!-- Department-specific job listing information -->
        <ilanBolumId>NUMERIC_ID</ilanBolumId>          <!-- Department job listing ID -->
        <ilanDetayId>NUMERIC_ID</ilanDetayId>          <!-- References same job detail ID as below -->
        <bolumId>NUMERIC_ID</bolumId>                  <!-- Department ID -->
        <bolum>DEPARTMENT_NAME</bolum>                 <!-- Department name, e.g., ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ -->
        <sart/>                                        <!-- Additional requirement (usually empty) -->
        <sartBolum/>                                   <!-- Department-specific requirement (usually empty) -->
        <durum>STATUS</durum>                          <!-- Status, e.g., Aktif -->
        <tarih>DATE</tarih>                            <!-- Department listing date -->
        <sartBolumId>NUMERIC_ID</sartBolumId>          <!-- Department requirement ID (usually 0) -->
        
        <!-- Job posting details - identical across departments for the same position -->
        <ilanDetay>
            <!-- Job posting identification and reference details -->
            <ilanDetayId>NUMERIC_ID</ilanDetayId>       <!-- Detailed posting ID -->
            <ilanId>NUMERIC_ID</ilanId>                 <!-- Job posting ID -->
            <referansKod>REFERENCE_CODE</referansKod>   <!-- Reference code, e.g., TBTK.BİLGEM.A.2025-2.03 -->
            
            <!-- Position information -->
            <ilanBirimi>DEPARTMENT</ilanBirimi>         <!-- Department/Unit, e.g., BİLGEM -->
            <pozisyon>POSITION_TITLE</pozisyon>         <!-- Position title, e.g., AR-GE PERSONELİ -->
            <unvan>FORMAL_TITLE</unvan>                 <!-- Formal title, e.g., AR-GE PERSONELİ (ARAŞTIRMACI) -->
            <personelStatu>STATUS_TYPE</personelStatu>  <!-- Personnel status type, e.g., Proje Personeli -->
            <gorevYeri>LOCATION</gorevYeri>             <!-- Work location, e.g., KONYA -->
            <personelSayisi>COUNT</personelSayisi>      <!-- Number of positions -->
            <durum>STATUS</durum>                       <!-- Current status, e.g., Aktif -->
            <tarih>DATE</tarih>                         <!-- Date information -->
            
            <!-- Detailed job description in HTML format -->
            <isinTanimi>
                <!-- HTML content with descriptions -->
                <ul>
                    <li>Job responsibility/description detail</li>
                </ul>
            </isinTanimi>
            
            <!-- Required qualifications in HTML format -->
            <aranacakOzelKosul>
                <!-- HTML content with ordered/unordered lists -->
                <ol>
                    <li>Required qualification</li>
                </ol>
                <ul>
                    <li>Preferred qualification</li>
                </ul>
            </aranacakOzelKosul>
            
            <!-- Various processing placeholders -->
            <formulParams/>
            <degerlendirmeDurumu/>
            <sonucAciklamaDurum/>
            <ilkAdayFormul/>
            <sonAdayFormul/>
            
            <!-- Detailed job posting information -->
            <ilan>
                <ilanId>NUMERIC_ID</ilanId>                     <!-- Job ID -->
                <ilanKod>POSTING_CODE</ilanKod>                 <!-- Posting code -->
                <ebysId/>                                       <!-- Electronic document system ID -->
                <ebysKonu/>                                     <!-- Electronic document subject -->
                <belgeAdi/>                                     <!-- Document name -->
                <belgeYolu/>                                    <!-- Document path -->
                <belgeAlternatifAd/>                            <!-- Alternative document name -->
                <enstitu>INSTITUTE</enstitu>                    <!-- Institute name, e.g., BİLGEM -->
                <ilanBaslangicTarih>START_DATE</ilanBaslangicTarih>  <!-- Posting start date/time -->
                <ilanBitisTarih>END_DATE</ilanBitisTarih>       <!-- Posting end date/time -->
                <durum>STATUS</durum>                           <!-- Posting status, e.g., Yayında -->
                <tarih>DATE</tarih>                             <!-- Publication date -->
                <ilanYil/>                                      <!-- Posting year -->
                <ilanMetni/>                                    <!-- Posting text -->
                <belgeSanalYol/>                                <!-- Virtual document path -->
                <maxReferansBasvurusu>COUNT</maxReferansBasvurusu>  <!-- Maximum reference applications -->
                <aranacakGenelKosulEski/>                       <!-- Old general requirements -->
                <basvuruSureciEski/>                            <!-- Old application process -->
                <servisText/>                                   <!-- Service text -->
                
                <!-- Application process details in HTML format -->
                <basvuruSureci>
                    <!-- HTML content with application instructions -->
                    <p>Application step</p>
                    <ul>
                        <li>Required document</li>
                    </ul>
                </basvuruSureci>
                
                <!-- General requirements in HTML format -->
                <aranacakGenelKosul>
                    <!-- HTML content explaining general requirements and formulas -->
                    <p>Formula for calculating points</p>
                    <img src="base64_encoded_image"/>
                    <table>
                        <!-- Table structure for point criteria -->
                    </table>
                    <p>General eligibility requirements</p>
                </aranacakGenelKosul>
                
                <ilanYayinDurum>STATUS_CODE</ilanYayinDurum>   <!-- Publication status code -->
                <mulakatAsamaTuru/>                            <!-- Interview stage type -->
                <degerlendirmeDurumu/>                         <!-- Evaluation status -->
            </ilan>
        </ilanDetay>
    </item>
    
    <!-- Additional items for the same job posting but for different academic departments -->
</List>
```

```json
{
  [
      {
        "ilanBolumId": "NUMERIC_ID",
        "ilanDetayId": "NUMERIC_ID",
        "bolumId": "NUMERIC_ID",
        "bolum": "DEPARTMENT_NAME",
        "sart": "",
        "sartBolum": "",
        "durum": "STATUS",
        "tarih": "DATE",
        "sartBolumId": "NUMERIC_ID",
        "ilanDetay": {
          "ilanDetayId": "NUMERIC_ID",
          "ilanId": "NUMERIC_ID",
          "referansKod": "REFERENCE_CODE",
          "ilanBirimi": "DEPARTMENT",
          "pozisyon": "POSITION_TITLE",
          "unvan": "FORMAL_TITLE",
          "personelStatu": "STATUS_TYPE",
          "gorevYeri": "LOCATION",
          "personelSayisi": "COUNT",
          "durum": "STATUS",
          "tarih": "DATE",
          "isinTanimi": "<ul><li>Job responsibility/description detail</li></ul>",
          "aranacakOzelKosul": "<ol><li>Required qualification</li></ol><ul><li>Preferred qualification</li></ul>",
          "formulParams": "",
          "degerlendirmeDurumu": "",
          "sonucAciklamaDurum": "",
          "ilkAdayFormul": "",
          "sonAdayFormul": "",
          "ilan": {
            "ilanId": "NUMERIC_ID",
            "ilanKod": "POSTING_CODE",
            "ebysId": "",
            "ebysKonu": "",
            "belgeAdi": "",
            "belgeYolu": "",
            "belgeAlternatifAd": "",
            "enstitu": "INSTITUTE",
            "ilanBaslangicTarih": "START_DATE",
            "ilanBitisTarih": "END_DATE",
            "durum": "STATUS",
            "tarih": "DATE",
            "ilanYil": "",
            "ilanMetni": "",
            "belgeSanalYol": "",
            "maxReferansBasvurusu": "COUNT",
            "aranacakGenelKosulEski": "",
            "basvuruSureciEski": "",
            "servisText": "",
            "basvuruSureci": "<p>Application step</p><ul><li>Required document</li></ul>",
            "aranacakGenelKosul": "<p>Formula for calculating points</p><img src=\"base64_encoded_image\"/><table></table><p>General eligibility requirements</p>",
            "ilanYayinDurum": "STATUS_CODE",
            "mulakatAsamaTuru": "",
            "degerlendirmeDurumu": ""
          }
        }
      }
    ]
}
```

# https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetayOzelKosul/1681


```xml
<!-- Root container for additional scoring conditions -->
<List>
    <!-- Individual scoring condition item -->
    <item>
        <!-- Scoring condition identifiers and values -->
        <ekOzelKosulPuanId>NUMERIC_ID</ekOzelKosulPuanId>    <!-- Additional special condition score ID -->
        <ilanDetayId>NUMERIC_ID</ilanDetayId>                 <!-- References the job posting detail ID -->
        <kosulAd>CONDITION_NAME</kosulAd>                     <!-- Condition name, e.g., "Onur/Ödül" (Honor/Award) -->
        <kosulSart>CONDITION_DESCRIPTION</kosulSart>          <!-- Detailed description of the condition -->
        <kosulSartPuan>SCORE_VALUE</kosulSartPuan>            <!-- Point value awarded for meeting the condition, e.g., 0.3 -->
        <durum>STATUS</durum>                                 <!-- Status of the condition, e.g., "Aktif" -->
        <tarih>DATE</tarih>                                   <!-- Date when the condition was created/updated -->
    </item>
    
    <!-- Additional scoring condition items would be listed here if present -->
</List>
```

```json
{
  "List": {
    "item": [
      {
        "ekOzelKosulPuanId": "NUMERIC_ID",
        "ilanDetayId": "NUMERIC_ID",
        "kosulAd": "CONDITION_NAME",
        "kosulSart": "CONDITION_DESCRIPTION",
        "kosulSartPuan": "SCORE_VALUE",
        "durum": "STATUS",
        "tarih": "DATE"
      }
    ]
  }
}
```


# https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetayOgrenimDurumu/1680


```xml
<!-- Root element containing all job postings -->
<List>
   <!-- Each job listing item -->
   <item>
       <!-- Education level ID for this job posting -->
       <ilanOgrenimId>NUMERIC_ID</ilanOgrenimId>
       <!-- Detail ID of the job posting -->
       <ilanDetayId>NUMERIC_ID</ilanDetayId>
       <!-- Required education level for the position -->
       <ogrenimDurum>EDUCATION_LEVEL</ogrenimDurum>
       <!-- Status of the job posting (Active/Inactive) -->
       <durum>STATUS</durum>
       <!-- Date timestamp of the posting -->
       <tarih>DATE_TIME</tarih>
       
       <!-- Container for detailed information about the job posting -->
       <ilanDetay>
           <!-- Detail ID matching the parent reference -->
           <ilanDetayId>NUMERIC_ID</ilanDetayId>
           <!-- Job posting ID -->
           <ilanId>NUMERIC_ID</ilanId>
           <!-- Reference code for the position -->
           <referansKod>REFERENCE_CODE</referansKod>
           <!-- Department/unit offering the position -->
           <ilanBirimi>DEPARTMENT</ilanBirimi>
           <!-- Position name -->
           <pozisyon>POSITION_TITLE</pozisyon>
           <!-- Formal title of the position -->
           <unvan>FORMAL_TITLE</unvan>
           <!-- Employment status (Project Personnel, etc.) -->
           <personelStatu>PERSONNEL_STATUS</personelStatu>
           <!-- Location where job will be performed -->
           <gorevYeri>LOCATION</gorevYeri>
           <!-- Number of vacancies for this position -->
           <personelSayisi>NUMBER</personelSayisi>
           <!-- Current status of the position -->
           <durum>STATUS</durum>
           <!-- Timestamp of the job posting -->
           <tarih>DATE_TIME</tarih>
           
           <!-- Detailed job description in HTML format -->
           <isinTanimi>
               <!-- Contains HTML content describing job responsibilities -->
               <ul>
                   <li>Job responsibility details</li>
               </ul>
           </isinTanimi>
           
           <!-- Special requirements for the position -->
           <aranacakOzelKosul>
               <!-- Contains HTML content with specific qualifications needed -->
               <ol>
                   <li>Educational requirements</li>
                   <li>Experience requirements</li>
               </ol>
               <ul>
                   <li>Preferred skills and qualifications</li>
               </ul>
           </aranacakOzelKosul>
           
           <!-- Parameters for evaluation formula -->
           <formulParams></formulParams>
           <!-- Current evaluation status -->
           <degerlendirmeDurumu></degerlendirmeDurumu>
           <!-- Results announcement status -->
           <sonucAciklamaDurum></sonucAciklamaDurum>
           <!-- Initial candidate formula -->
           <ilkAdayFormul></ilkAdayFormul>
           <!-- Final candidate formula -->
           <sonAdayFormul></sonAdayFormul>
           
           <!-- Container for job posting metadata -->
           <ilan>
               <!-- Job posting ID -->
               <ilanId>NUMERIC_ID</ilanId>
               <!-- Job posting code -->
               <ilanKod>POSTING_CODE</ilanKod>
               <!-- Electronic document system ID (if applicable) -->
               <ebysId></ebysId>
               <!-- Electronic document system subject -->
               <ebysKonu></ebysKonu>
               <!-- Document name -->
               <belgeAdi></belgeAdi>
               <!-- Document path -->
               <belgeYolu></belgeYolu>
               <!-- Alternative document name -->
               <belgeAlternatifAd></belgeAlternatifAd>
               <!-- Institute name -->
               <enstitu>INSTITUTE_NAME</enstitu>
               <!-- Posting start date and time -->
               <ilanBaslangicTarih>START_DATE_TIME</ilanBaslangicTarih>
               <!-- Posting end date and time -->
               <ilanBitisTarih>END_DATE_TIME</ilanBitisTarih>
               <!-- Status of the posting (Published, etc.) -->
               <durum>POSTING_STATUS</durum>
               <!-- Timestamp of the posting -->
               <tarih>DATE_TIME</tarih>
               <!-- Posting year -->
               <ilanYil></ilanYil>
               <!-- Full text of the posting -->
               <ilanMetni></ilanMetni>
               <!-- Virtual path to the document -->
               <belgeSanalYol></belgeSanalYol>
               <!-- Maximum number of reference applications -->
               <maxReferansBasvurusu>NUMBER</maxReferansBasvurusu>
               <!-- Previous general conditions (if changed) -->
               <aranacakGenelKosulEski></aranacakGenelKosulEski>
               <!-- Previous application process (if changed) -->
               <basvuruSureciEski></basvuruSureciEski>
               <!-- Service text -->
               <servisText></servisText>
               
               <!-- Application process details in HTML format -->
               <basvuruSureci>
                   <!-- Contains HTML content with steps for application -->
                   <p>Application details</p>
                   <ul>
                       <li>Application steps and requirements</li>
                   </ul>
               </basvuruSureci>
               
               <!-- General conditions and requirements in HTML format -->
               <aranacakGenelKosul>
                   <!-- Contains HTML content with general requirements -->
                   <p>Eligibility criteria</p>
                   <h4>Position types with experience requirements</h4>
                   <p>Point calculation formulas</p>
                   <!-- Often includes assessment formulas, tables, and application rules -->
               </aranacakGenelKosul>
               
               <!-- Publication status (1=Published) -->
               <ilanYayinDurum>PUBLISH_STATUS</ilanYayinDurum>
               <!-- Interview phase type -->
               <mulakatAsamaTuru></mulakatAsamaTuru>
               <!-- Evaluation status -->
               <degerlendirmeDurumu></degerlendirmeDurumu>
           </ilan>
       </ilanDetay>
   </item>
   
   <!-- Additional job posting items follow the same structure -->
</List>
```

```json
{
  "List": {
    "item": [
      {
        "ilanOgrenimId": "NUMERIC_ID",
        "ilanDetayId": "NUMERIC_ID",
        "ogrenimDurum": "EDUCATION_LEVEL",
        "durum": "STATUS",
        "tarih": "DATE_TIME",
        "ilanDetay": {
          "ilanDetayId": "NUMERIC_ID",
          "ilanId": "NUMERIC_ID",
          "referansKod": "REFERENCE_CODE",
          "ilanBirimi": "DEPARTMENT",
          "pozisyon": "POSITION_TITLE",
          "unvan": "FORMAL_TITLE",
          "personelStatu": "PERSONNEL_STATUS",
          "gorevYeri": "LOCATION",
          "personelSayisi": "NUMBER",
          "durum": "STATUS",
          "tarih": "DATE_TIME",
          "isinTanimi": "<ul><li>Job responsibility details</li></ul>",
          "aranacakOzelKosul": "<ol><li>Educational requirements</li><li>Experience requirements</li></ol><ul><li>Preferred skills and qualifications</li></ul>",
          "formulParams": "",
          "degerlendirmeDurumu": "",
          "sonucAciklamaDurum": "",
          "ilkAdayFormul": "",
          "sonAdayFormul": "",
          "ilan": {
            "ilanId": "NUMERIC_ID",
            "ilanKod": "POSTING_CODE",
            "ebysId": "",
            "ebysKonu": "",
            "belgeAdi": "",
            "belgeYolu": "",
            "belgeAlternatifAd": "",
            "enstitu": "INSTITUTE_NAME",
            "ilanBaslangicTarih": "START_DATE_TIME",
            "ilanBitisTarih": "END_DATE_TIME",
            "durum": "POSTING_STATUS",
            "tarih": "DATE_TIME",
            "ilanYil": "",
            "ilanMetni": "",
            "belgeSanalYol": "",
            "maxReferansBasvurusu": "NUMBER",
            "aranacakGenelKosulEski": "",
            "basvuruSureciEski": "",
            "servisText": "",
            "basvuruSureci": "<p>Application details</p><ul><li>Application steps and requirements</li></ul>",
            "aranacakGenelKosul": "<p>Eligibility criteria</p><h4>Position types with experience requirements</h4><p>Point calculation formulas</p>",
            "ilanYayinDurum": "PUBLISH_STATUS",
            "mulakatAsamaTuru": "",
            "degerlendirmeDurumu": ""
          }
        }
      }
    ]
  }
}
```

# https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetayTecrube/1681

```xml
<!-- Root element containing all job postings -->
<List>
   <!-- Each job posting item -->
   <item>
       <!-- Job posting experience ID -->
       <ilanTecrubeId>NUMERIC_ID</ilanTecrubeId>
       <!-- Detail ID of the job posting -->
       <ilanDetayId>NUMERIC_ID</ilanDetayId>
       <!-- Experience requirement status (VAR=Required) -->
       <tecrubeSartDurum>STATUS_CODE</tecrubeSartDurum>
       <!-- Required years of experience -->
       <tecrubeYili>NUMBER</tecrubeYili>
       <!-- Current status of the job posting (Active/Inactive) -->
       <durum>STATUS</durum>
       <!-- Date timestamp of the posting -->
       <tarih>DATE_TIME</tarih>
       
       <!-- Container for detailed information about the job posting -->
       <ilanDetay>
           <!-- Detail ID matching the parent reference -->
           <ilanDetayId>NUMERIC_ID</ilanDetayId>
           <!-- Job posting ID -->
           <ilanId>NUMERIC_ID</ilanId>
           <!-- Reference code for the position -->
           <referansKod>REFERENCE_CODE</referansKod>
           <!-- Department/unit offering the position -->
           <ilanBirimi>DEPARTMENT</ilanBirimi>
           <!-- Position name -->
           <pozisyon>POSITION_TITLE</pozisyon>
           <!-- Formal title of the position -->
           <unvan>FORMAL_TITLE</unvan>
           <!-- Employment status (Project Personnel, etc.) -->
           <personelStatu>PERSONNEL_STATUS</personelStatu>
           <!-- Location where job will be performed -->
           <gorevYeri>LOCATION</gorevYeri>
           <!-- Number of vacancies for this position -->
           <personelSayisi>NUMBER</personelSayisi>
           <!-- Current status of the position -->
           <durum>STATUS</durum>
           <!-- Timestamp of the job posting -->
           <tarih>DATE_TIME</tarih>
           
           <!-- Detailed job description in HTML format -->
           <isinTanimi>
               <!-- Contains HTML content describing job responsibilities -->
               <p>Job overview paragraph</p>
               <ul>
                   <li>Detailed responsibilities and project areas</li>
               </ul>
           </isinTanimi>
           
           <!-- Special requirements and qualifications for the position -->
           <aranacakOzelKosul>
               <!-- Contains HTML content with specific qualifications needed -->
               <ol>
                   <li>Educational requirements</li>
                   <li>Experience requirements</li>
                   <li>Preferred qualifications</li>
               </ol>
               <ul>
                   <li>Technical skills and knowledge areas</li>
                   <li>Specific technical experience requirements</li>
               </ul>
           </aranacakOzelKosul>
           
           <!-- Parameters for evaluation formula -->
           <formulParams></formulParams>
           <!-- Current evaluation status -->
           <degerlendirmeDurumu></degerlendirmeDurumu>
           <!-- Results announcement status -->
           <sonucAciklamaDurum></sonucAciklamaDurum>
           <!-- Initial candidate formula -->
           <ilkAdayFormul></ilkAdayFormul>
           <!-- Final candidate formula -->
           <sonAdayFormul></sonAdayFormul>
           
           <!-- Container for job posting metadata -->
           <ilan>
               <!-- Job posting ID -->
               <ilanId>NUMERIC_ID</ilanId>
               <!-- Job posting code -->
               <ilanKod>POSTING_CODE</ilanKod>
               <!-- Electronic document system ID (if applicable) -->
               <ebysId></ebysId>
               <!-- Electronic document system subject -->
               <ebysKonu></ebysKonu>
               <!-- Document name -->
               <belgeAdi></belgeAdi>
               <!-- Document path -->
               <belgeYolu></belgeYolu>
               <!-- Alternative document name -->
               <belgeAlternatifAd></belgeAlternatifAd>
               <!-- Institute name -->
               <enstitu>INSTITUTE_NAME</enstitu>
               <!-- Posting start date and time -->
               <ilanBaslangicTarih>START_DATE_TIME</ilanBaslangicTarih>
               <!-- Posting end date and time -->
               <ilanBitisTarih>END_DATE_TIME</ilanBitisTarih>
               <!-- Status of the posting (Published, etc.) -->
               <durum>POSTING_STATUS</durum>
               <!-- Timestamp of the posting -->
               <tarih>DATE_TIME</tarih>
               <!-- Posting year -->
               <ilanYil></ilanYil>
               <!-- Full text of the posting -->
               <ilanMetni></ilanMetni>
               <!-- Virtual path to the document -->
               <belgeSanalYol></belgeSanalYol>
               <!-- Maximum number of reference applications -->
               <maxReferansBasvurusu>NUMBER</maxReferansBasvurusu>
               <!-- Previous general conditions (if changed) -->
               <aranacakGenelKosulEski></aranacakGenelKosulEski>
               <!-- Previous application process (if changed) -->
               <basvuruSureciEski></basvuruSureciEski>
               <!-- Service text -->
               <servisText></servisText>
               
               <!-- Application process details in HTML format -->
               <basvuruSureci>
                   <!-- Contains HTML content with steps for application -->
                   <p>Application procedures</p>
                   <ul>
                       <li>Application process steps</li>
                       <li>Required documents</li>
                       <li>Deadlines and submission methods</li>
                   </ul>
               </basvuruSureci>
               
               <!-- General conditions and requirements in HTML format -->
               <aranacakGenelKosul>
                   <!-- Contains HTML content with general eligibility criteria -->
                   <p>Eligibility formulas for ranking candidates</p>
                   <h4>Position categories</h4>
                   <p>Score calculation formulas for different position types</p>
                   <figure class="table">
                       <table>
                           <!-- Special condition scores, qualification tables, etc. -->
                       </table>
                   </figure>
                   <p>General employment requirements</p>
               </aranacakGenelKosul>
               
               <!-- Publication status (1=Published) -->
               <ilanYayinDurum>PUBLISH_STATUS</ilanYayinDurum>
               <!-- Interview phase type -->
               <mulakatAsamaTuru></mulakatAsamaTuru>
               <!-- Evaluation status -->
               <degerlendirmeDurumu></degerlendirmeDurumu>
           </ilan>
       </ilanDetay>
   </item>
   
   <!-- Additional job posting items follow the same structure -->
</List>
```

```json
{
  "List": {
    "item": [
      {
        "ilanTecrubeId": "NUMERIC_ID",
        "ilanDetayId": "NUMERIC_ID",
        "tecrubeSartDurum": "STATUS_CODE",
        "tecrubeYili": "NUMBER",
        "durum": "STATUS",
        "tarih": "DATE_TIME",
        "ilanDetay": {
          "ilanDetayId": "NUMERIC_ID",
          "ilanId": "NUMERIC_ID",
          "referansKod": "REFERENCE_CODE",
          "ilanBirimi": "DEPARTMENT",
          "pozisyon": "POSITION_TITLE",
          "unvan": "FORMAL_TITLE",
          "personelStatu": "PERSONNEL_STATUS",
          "gorevYeri": "LOCATION",
          "personelSayisi": "NUMBER",
          "durum": "STATUS",
          "tarih": "DATE_TIME",
          "isinTanimi": "<p>Job overview paragraph</p><ul><li>Detailed responsibilities and project areas</li></ul>",
          "aranacakOzelKosul": "<ol><li>Educational requirements</li><li>Experience requirements</li><li>Preferred qualifications</li></ol><ul><li>Technical skills and knowledge areas</li><li>Specific technical experience requirements</li></ul>",
          "formulParams": "",
          "degerlendirmeDurumu": "",
          "sonucAciklamaDurum": "",
          "ilkAdayFormul": "",
          "sonAdayFormul": "",
          "ilan": {
            "ilanId": "NUMERIC_ID",
            "ilanKod": "POSTING_CODE",
            "ebysId": "",
            "ebysKonu": "",
            "belgeAdi": "",
            "belgeYolu": "",
            "belgeAlternatifAd": "",
            "enstitu": "INSTITUTE_NAME",
            "ilanBaslangicTarih": "START_DATE_TIME",
            "ilanBitisTarih": "END_DATE_TIME",
            "durum": "POSTING_STATUS",
            "tarih": "DATE_TIME",
            "ilanYil": "",
            "ilanMetni": "",
            "belgeSanalYol": "",
            "maxReferansBasvurusu": "NUMBER",
            "aranacakGenelKosulEski": "",
            "basvuruSureciEski": "",
            "servisText": "",
            "basvuruSureci": "<p>Application procedures</p><ul><li>Application process steps</li><li>Required documents</li><li>Deadlines and submission methods</li></ul>",
            "aranacakGenelKosul": "<p>Eligibility formulas for ranking candidates</p><h4>Position categories</h4><p>Score calculation formulas for different position types</p><figure class=\"table\"><table></table></figure><p>General employment requirements</p>",
            "ilanYayinDurum": "PUBLISH_STATUS",
            "mulakatAsamaTuru": "",
            "degerlendirmeDurumu": ""
          }
        }
      }
    ]
  }
}
```