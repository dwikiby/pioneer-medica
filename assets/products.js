const products = [
  {
    name: "Natrium Klorida Isotonik",
    description:
      "Larutan natrium klorida isotonik steril, dirancang untuk rehidrasi cepat pada pasien dengan kekurangan cairan ringan hingga sedang. Ideal untuk menjaga keseimbangan cairan tubuh.",
    image: "assets/products_img/1.jpeg",
  },
  {
    name: "Magnesium Sulfat Infus",
    description:
      "Diformulasikan khusus untuk mengatasi defisiensi magnesium secara cepat dan aman, infus ini membantu menstabilkan fungsi jantung, otot, dan saraf pada pasien dengan kebutuhan magnesium akut. Ideal untuk pemulihan elektrolit tubuh dalam terapi medis intensif.",
    image: "assets/products_img/2.jpeg",
  },
  {
    name: "Infus Sodium Bicarbonate 8,4%",
    description:
      "Infus Sodium Bicarbonate 8,4% ini diformulasikan untuk mengatasi kondisi asidosis metabolik dengan cepat dan efektif, membantu menyeimbangkan pH tubuh dalam situasi darurat medis. Dengan standar farmasi tertinggi, produk ini memberikan dukungan optimal untuk stabilisasi kondisi pasien di ruang perawatan intensif.",
    image: "assets/products_img/3.jpeg",
  },
  {
    name: "Infus Albumin 20%",
    description:
      "Efektif menambah volume darah dan menstabilkan tekanan osmotik, Infus Albumin 20% mendukung pemulihan cepat bagi pasien dengan hipoalbuminemia atau kehilangan cairan parah, ideal untuk perawatan intensif.",
    image: "assets/products_img/4.jpeg",
  },
  {
    name: "Infus Natrium Klorida 0,9%",
    description:
      "Infus steril isotonik yang mengandung natrium klorida 0,9%, dirancang untuk rehidrasi dan mengembalikan keseimbangan elektrolit tubuh. Cocok digunakan untuk pasien dengan dehidrasi ringan hingga sedang, serta mendukung terapi cairan intravena pada berbagai kondisi medis.",
    image: "assets/products_img/5.jpeg",
  },
  {
    name: "Infus Dextrose 5%",
    description:
      "Memberikan energi instan dan hidrasi optimal, Infus Dextrose 5% cocok untuk pasien yang membutuhkan pemulihan cairan tubuh dan asupan kalori tambahan. Ideal untuk perawatan pasca-operasi dan kondisi medis tertentu.",
    image: "assets/products_img/6.jpeg",
  },
  {
    name: "Infus Despos",
    description:
      "Memberikan energi instan dan hidrasi optimal, Infus Dextrose 5% cocok untuk pasien yang membutuhkan pemulihan cairan tubuh dan asupan kalori tambahan. Ideal untuk perawatan pasca-operasi dan kondisi medis tertentu.",
    image: "assets/products_img/7.jpeg",
  },
  {
    name: "Infus Despos",
    description:
      "Infus Despos mengandung campuran elektrolit yang dirancang untuk mengatasi dehidrasi dengan cepat, mendukung keseimbangan cairan tubuh, serta meningkatkan pemulihan pada pasien dengan kebutuhan cairan intensif.",
    image: "assets/products_img/8.jpeg",
  },
  {
    name: "Avitmin Mata",
    description:
      "Diformulasikan khusus untuk mendukung kesehatan mata, Avitmin Mata mengandung vitamin dan antioksidan yang membantu melindungi mata dari efek buruk sinar UV dan stres oksidatif, menjaga penglihatan tetap optimal.",
    image: "assets/products_img/10.png",
  },
  {
    name: "Bedak Evitmin Kulit",
    description:
      "Bedak Evitmin Kulit memberikan perlindungan ekstra bagi kulit dengan kandungan vitamin yang menutrisi dan menjaga kelembapan, cocok untuk kulit sensitif serta memberikan rasa segar sepanjang hari.",
    image: "assets/products_img/11.png",
  },
  {
    name: "Vitamin D Kompleks",
    description:
      "Vitamin D Kompleks mendukung kesehatan tulang dan kekebalan tubuh dengan dosis tepat vitamin D3, meningkatkan penyerapan kalsium dan membantu tubuh mempertahankan daya tahan yang kuat.",
    image: "assets/products_img/12.png",
  },
  {
    name: "Vitamin B Kompleks + Vitamin C",
    description:
      "Kombinasi sempurna antara vitamin B kompleks dan vitamin C, memberikan energi ekstra, meningkatkan metabolisme tubuh, dan memperkuat sistem imun, cocok untuk menunjang keseharian yang padat.",
    image: "assets/products_img/13.png",
  },
  {
    name: "Tablet Cimin",
    description:
      "Tablet Cimin efektif meredakan gangguan pencernaan dan mual, memberikan kenyamanan pada perut Anda dengan formulasi yang aman dan cepat bekerja, ideal untuk pemulihan pasca-makan atau kondisi perut tidak nyaman.",
    image: "assets/products_img/14.png",
  },
  {
    name: "Obat Steril Amino Acid",
    description:
      "Solusi terbaik untuk mendukung pemulihan fungsi ginjal, Obat Steril Amino Acid menyediakan asam amino esensial yang diperlukan tubuh untuk proses metabolisme dan regenerasi sel ginjal, mendukung terapi pasien dengan gangguan ginjal kronis.",
    image: "assets/products_img/15.png",
  },
  {
    name: "Infus Metrozol",
    description:
      "Infus Metrozol menawarkan solusi cepat untuk infeksi bakteri serius, bekerja efektif melawan berbagai patogen, mendukung perawatan pasien dengan infeksi parah dan sepsis.",
    image: "assets/products_img/16.png",
  },
  {
    name: "Infus Levofloxacin",
    description:
      "Infus Levofloxacin antibiotik spektrum luas yang efektif untuk mengatasi infeksi bakteri berat, memberikan hasil terapi yang cepat untuk perawatan infeksi saluran pernapasan, saluran kemih, dan lainnya.",
    image: "assets/products_img/17.png",
  },
  {
    name: "Infus Trigliserida",
    description:
      "Infus Trigliserida memberikan suplai energi langsung dan cepat pada pasien yang membutuhkan terapi lipid parenteral, mendukung nutrisi intensif bagi pasien pasca-operasi dan yang menderita malnutrisi.",
    image: "assets/products_img/18.png",
  },
  {
    name: "Infus Asam Amino Pediatrik",
    description:
      "Dirancang khusus untuk kebutuhan nutrisi anak-anak, Asam Amino Pediatrik membantu mendukung pertumbuhan dan perkembangan yang optimal, dengan formula yang mudah diserap oleh tubuh anak.",
    image: "assets/products_img/19.png",
  },
  {
    name: "Infus Amino Acid 9%",
    description:
      "Infus Amino Acid 9% mendukung pemulihan tubuh dengan menyediakan asam amino esensial dalam kadar yang tepat, sangat efektif untuk terapi nutrisi parenteral pada pasien dengan kondisi medis berat.",
    image: "assets/products_img/20.png",
  },
  {
    name: "Infus Glutamine",
    description:
      "Infus Glutamine membantu meningkatkan daya tahan tubuh dan mempercepat pemulihan, khususnya bagi pasien yang mengalami trauma atau infeksi berat, mendukung perbaikan jaringan dan fungsi sistem kekebalan tubuh.",
    image: "assets/products_img/21.png",
  },
  {
    name: "Infus Amino Acid Hati Kronik",
    description:
      "Formula khusus yang mendukung regenerasi hati, Amino Acid Hati Kronik mengoptimalkan perawatan pasien dengan gangguan hati kronis, memperbaiki metabolisme dan memaksimalkan proses detoksifikasi tubuh.",
    image: "assets/products_img/22.png",
  },
  {
    name: "Infus Elektrolit",
    description:
      "Infus Elektrolit memberikan hidrasi dan keseimbangan elektrolit tubuh dengan cepat dan efisien, ideal untuk pasien dengan dehidrasi atau ketidakseimbangan elektrolit akibat kondisi medis tertentu.",
    image: "assets/products_img/23.png",
  },
  {
    name: "Infus Amino Acid + Sorbitol",
    description:
      "Infus Amino Acid + Sorbitol menyuplai asam amino dan energi dengan cepat, membantu pemulihan nutrisi pasien pasca-operasi atau yang membutuhkan dukungan metabolik intensif.",
    image: "assets/products_img/24.png",
  },
  {
    name: "Nasal Drop Rifampisin",
    description:
      "Nasal Drop Rifampisin efektif untuk mengobati infeksi saluran pernapasan atas, memberikan solusi praktis dengan penyerapan cepat untuk mengatasi infeksi bakteri lokal di hidung.",
    image: "assets/products_img/25.png",
  },
  {
    name: "Nasal Drop Ciprometoxazol",
    description:
      "Menyediakan perlindungan maksimal terhadap infeksi bakteri, Nasal Drop Ciprometoxazol meredakan peradangan dan infeksi pada saluran pernapasan atas, memberikan kenyamanan pada hidung tersumbat atau sinusi",
    image: "assets/products_img/26.png",
  },
  {
    name: "Salep Kloramfenikol",
    description:
      "Salep Kloramfenikol efektif mengatasi infeksi kulit bakteri dengan cepat, memberikan perlindungan optimal untuk luka dan bekas infeksi dengan formula yang aman dan mudah digunakan.",
    image: "assets/products_img/27.png",
  },
  {
    name: "Salep Diclofenac",
    description:
      "Dikenal untuk kemampuannya meredakan nyeri otot dan sendi, Salep Diclofenac memberikan bantuan lokal untuk peradangan dan nyeri dengan formula anti-inflamasi yang cepat bekerja.",
    image: "assets/products_img/28.png",
  },
  {
    name: "Salep Cloritrimazole",
    description:
      "Mengatasi infeksi jamur pada kulit, Salep Cloritrimazole membantu mempercepat pemulihan dan memberikan efek anti-jamur yang kuat, cocok untuk mengatasi kondisi seperti kutu air dan dermatitis.",
    image: "assets/products_img/29.png",
  },
  {
    name: "Salep Miconazole Nitrat 2%",
    description:
      "Salep Miconazole Nitrat 2% menawarkan solusi cepat untuk infeksi jamur pada kulit, bekerja efektif untuk mengurangi gejala gatal dan iritasi akibat infeksi jamur dengan hasil yang terlihat dalam waktu singkat.",
    image: "assets/products_img/30.png",
  },
  {
    name: "Salep Cetrimonium Bromide",
    description:
      "Diformulasikan untuk mengobati infeksi kulit ringan hingga sedang, Salep Cetrimonium Bromide memberikan pengobatan efektif dengan kandungan antimikroba yang bekerja cepat pada luka atau iritasi kulit.",
    image: "assets/products_img/31.png",
  },
  {
    name: "Salep Ketoconazole",
    description:
      "Dengan kandungan ketoconazole, salep ini memberikan perlindungan maksimal terhadap infeksi jamur kulit, memberikan hasil cepat dalam mengurangi gejala gatal dan iritasi akibat infeksi jamur.",
    image: "assets/products_img/32.png",
  },
  {
    name: "Salep Clobetazole",
    description:
      "Clobetazole adalah kortikosteroid kuat yang efektif mengatasi kondisi kulit inflamasi seperti psoriasis dan eksim, memberikan perbaikan cepat dan efektif pada kulit yang meradang dan gatal.",
    image: "assets/products_img/33.png",
  },
  {
    name: "Salep Desoximetasone",
    description:
      "Desoximetasone adalah salep kortikosteroid yang membantu meredakan peradangan dan gatal akibat penyakit kulit inflamasi, memberikan kelegaan cepat dan mencegah gejala kambuh.",
    image: "assets/products_img/34.png",
  },
  {
    name: "Salep Mometasone Fibrate",
    description:
      "Mometasone Fibrate menawarkan perawatan efektif untuk peradangan kulit, membantu mengurangi kemerahan dan iritasi akibat kondisi kulit seperti eksim dan dermatitis, memberikan hasil yang cepat dan jangka panjang.",
    image: "assets/products_img/35.png",
  },
  {
    name: "Salep Neomycin",
    description:
      "Neomycin salep bekerja sebagai antibiotik lokal yang efektif melawan infeksi kulit, membantu mempercepat penyembuhan luka dan mencegah infeksi lebih lanjut dengan penggunaan yang aman dan terbukti efektif.",
    image: "assets/products_img/36.png",
  },
  {
    name: "Sirup Cehydro Flu Alergi",
    description:
      "Diformulasikan khusus untuk meredakan gejala flu dan alergi, Sirup Cehydro Flu Alergi membantu mengurangi hidung tersumbat, bersin, dan gatal-gatal dengan cepat, memberikan kenyamanan maksimal selama musim alergi.",
    image: "assets/products_img/37.png",
  },
  {
    name: "Sirup Batuk Hitam",
    description:
      "Dengan bahan alami yang kuat, Sirup Batuk Hitam efektif mengatasi batuk kering dan berdahak, memberikan kelegaan dengan rasa yang enak, serta membantu melunakkan dahak dan meredakan iritasi tenggorokan.",
    image: "assets/products_img/38.png",
  },
  {
    name: "Sirup Pseudoefedrine",
    description:
      "Solusi efektif untuk meredakan hidung tersumbat akibat flu atau alergi, Sirup Pseudoefedrine bekerja dengan cepat untuk membuka saluran pernapasan dan membantu Anda bernapas lebih lega.",
    image: "assets/products_img/39.png",
  },
  {
    name: "Sirup Ibu Profen",
    description:
      "Sirup Ibu Profen menawarkan relief instan untuk demam dan nyeri pada anak-anak, memberikan kelegaan dari gejala flu, sakit kepala, dan nyeri otot dengan dosis yang aman dan mudah diserap tubuh.",
    image: "assets/products_img/40.png",
  },
  {
    name: "Sirup Paracetamol",
    description:
      "Sirup Paracetamol memberikan solusi praktis untuk meredakan demam dan nyeri ringan hingga sedang pada anak-anak, aman digunakan untuk membantu memulihkan kondisi tubuh dengan cepat.",
    image: "assets/products_img/41.png",
  },
  {
    name: "Pil Bromhexine HCl",
    description:
      "Pil Bromhexine HCl membantu meredakan batuk berdahak dengan mengencerkan dahak, memudahkan pengeluaran dahak, dan memberikan kenyamanan dalam proses penyembuhan saluran pernapasan.",
    image: "assets/products_img/42.png",
  },
  {
    name: "Pil Bindex",
    description:
      "Bindex menggabungkan paracetamol untuk meredakan rasa sakit dan kafein untuk memberikan dorongan energi, Pil Bindex memberikan solusi cepat untuk sakit kepala, migrain, atau nyeri ringan hingga sedang.",
    image: "assets/products_img/43.png",
  },
  {
    name: "Tablet Antasida",
    description:
      "Tablet Antasida memberikan bantuan cepat untuk meredakan rasa sakit akibat asam lambung, mengurangi gejala maag dan mulas, serta melindungi lambung dengan formula yang efektif dan aman digunakan.",
    image: "assets/products_img/44.png",
  },
  {
    name: "Tablet Combin",
    description:
      "Tablet Combin memberikan solusi praktis untuk nyeri dan peradangan ringan hingga sedang. Dengan kandungan obat yang efektif, tablet ini memberikan kelegaan cepat untuk berbagai keluhan tubuh.",
    image: "assets/products_img/45.png",
  },
  {
    name: "Tablet Panmol",
    description:
      "Panmol dengan efek meredakan sakit kepala, demam, dan nyeri tubuh lainnya, memberikan kenyamanan tubuh secara cepat dengan formula yang aman dan efektif.",
    image: "assets/products_img/46.png",
  },
  {
    name: "Suplemen Makan Folatcid",
    description:
      "Suplemen makan Folatcid mengandung asam folat yang penting untuk kesehatan ibu hamil dan janin, mendukung perkembangan sel dan mencegah risiko kelainan pada janin, serta menjaga keseimbangan nutrisi tub",
    image: "assets/products_img/47.png",
  },
  {
    name: "Fil Furosemide",
    description:
      "Fil Furosemide adalah diuretik yang efektif mengurangi pembengkakan dan retensi cairan pada pasien dengan masalah jantung, ginjal, atau hati, mendukung pemulihan dengan cara yang aman dan efisien.",
    image: "assets/products_img/48.png",
  },
  {
    name: "Pil PCT + Ibuprofen",
    description:
      "Kombinasi tepat antara PCT dan Ibuprofen, pil ini efektif mengurangi rasa sakit dan peradangan, cocok untuk nyeri otot, sakit kepala, serta nyeri pasca-operasi, memberikan efek cepat dan tahan lama.",
    image: "assets/products_img/49.png",
  },
  {
    name: "Pil Difenhidramin",
    description:
      "Pil Difenhidramin mengatasi gejala alergi, seperti gatal-gatal dan hidung tersumbat, serta efektif meredakan gangguan tidur akibat alergi atau flu, memberikan kenyamanan dan mendorong tidur yang nyenyak.",
    image: "assets/products_img/50.png",
  },
  {
    name: "Pil Asam Mefenamat",
    description:
      "Pil Asam Mefenamat efektif untuk mengatasi nyeri dan peradangan ringan hingga sedang, termasuk nyeri otot, sakit kepala, dan nyeri haid, memberikan efek cepat dan aman untuk kenyamanan tubuh Anda.",
    image: "assets/products_img/51.png",
  },
];
export default products;
