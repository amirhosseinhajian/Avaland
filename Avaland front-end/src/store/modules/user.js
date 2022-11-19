const user = {
  namespaced: true,

  state: {
    user: null,
    isLogin: true,
    role: "admin",
    playlists: [
      {
        name: "آزادی",
        creator: "امیرحسین",
        isLike: false,
        musics: [
          {
            id: 50,
            name: "برای",
            img: "6050-Shervin-Hajipor-Baraye.png",
            singer: "شروین حاجی پور",
            isLike: false,
            source: "Shervin Hajipour - Baraye (320-Naslemusic).mp3",
            duration: 151,
            lyric: `برای ترسیدن به وقت بوسیدن
            برای تغییر مغزها که پوسیدن
            برای شرمندگی برای بی پولی
            برای حسرت یک زندگی معمولی
            برای کودک زباله گرد و آرزوهاش
            برای این اقتصاد دستوری
            برای این هوای آلوده
            برای ولیعصر و درخت های فرسوده
            برای پیروز و احتمال انقراضش
            برای سگ های بی گناه ممنوعه
            برای گریه های بی وقفه
            برای تصویر تکرار این لحظه
            برای چهره ای که میخنده
            برای دانش آموزا برای آینده
            برای نخبه های زندانی
            برای کودکان افغانی
            برای این همه برای غیر تکراری
            برای این همه شعارهای توخالی
            برای آوار خونه های پوشالی
            برای احساس آرامش
            برای خورشید پس از شبای طولانی
            برای قرص های اعصاب و بی خوابی
            برای دختری که آرزو داشت پسر بود
            برای زن زندگی آزای`,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2022 17:58:00"),
          },
          {
            id: 70,
            name: "از خزر تا خلیج فارس",
            img: "Shahin-Najafi-Iran-Mp3-Dwonload-Lyrics-1170x658-1.jpg",
            singer: "شاهین نجفی",
            isLike: false,
            source: "Ahang-Jadid-Az-Khazar-Ta-Khalij-Fars-320.mp3",
            duration: 221,
            lyric: `چه بوی خون تازه میده خاک تنت
            چه سرخه گلای روی پیرهنت
            چه رگای خشکیده رو به کویری
            سَر خم نمی‌کنی با اینکه اسیری
            از خزر تا خلیج فارس     
            جای زخم قدیمی گلوله‌هاس      
            مگه میشه خاکتو به بیگانه داد      
            خائن شرمنده از آیینه‌هاس     
            از خزر تا خلیج فارس     
            جای زخم قدیمی گلوله‌هاس      
            مگه میشه خاکتو به بیگانه داد      
            خائن شرمنده از آیینه‌ها      
            کی می‌گیره قلبم آروم     
            تا وقتی تو تو‌بندی ایرانه خانوم      
            شیر بانو جان زیبا     
            خورشید رهایی‌ قصه‌هامون     
            سخت نیست تو‌ رو‌ ساختن‌ از نو      
            دووم بیار تا بمونی برامون     
            پادشاه منطقه تویی     
            تو منطق عشقی ایرانه خانوم     
            از خزر تا خلیج فارس     
            جای زخم قدیمی گلوله‌هاس      
            مگه میشه خاکتو به بیگانه داد      
            خائن شرمنده از آیینه‌هاس     
            ایران     
            نشه دست چین دست چین کنه گلاتو     
            آب و خاک و جان مایی     
            مادر، داریم هواتو     
            دست تبهکار تجاوز کرده به بدنت     
            تبارتو سوزند و تبرشو زده به تنت     
            بمیریم و نبینم مردنتو آروم آروم     
            نبردی مردمتو از یاد که جان بانو
            ببخش ما رو اگه دستمون کوتاهه برات     
            نمونده چیزی جز جونمون که قربانی شه به پات     
            شور می‌زنه دلم که کور دل بهت مسلطه     
            رهایی توئه که شرط آزادی ملته      
            بگو با بغض مادرای چش به راه آبان      
            بگو با بچه‌های نسل خون ستارخان     
            بگو با قامت رشید نوید افکاری‌ها      
            بگو‌ با سینه‌ی ستبر پویا بختیاری‌ها      
            تو تاریکی، تو نوری      
            بشکاف ای مرز رهایی      
            طلوع کن دوباره      
            از خزر تا خلیج فارس     
            جای زخم قدیمی گلوله‌هاس      
            مگه میشه خاکتو به بیگانه داد      
            خائن شرمنده از آیینه‌هاس`,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2022 17:58:00"),
          },
        ],
      },
      {
        name: "گلچین شاد مجلسی آخر هفته ها",
        creator: "امیرحسین",
        isLike: true,
        musics: [
          {
            id: 3,
            name: "بغلم کن",
            img: "Reza-Ramyar-Baghalam-Kon.jpg",
            singer: "رضا رامیار",
            isLike: false,
            source: "mvc2.mp3",
            duration: 203,
            lyric: `ای وای دل من
            بعد عمری داره میخنده انگار دیگه نیست مال من
            تو بمون واسه من
            قول میده که سر به راه بشه آدم مغرور بد
            بیا بغلم کن (بغلم کن)
            بریز تو تن من همه ی اون درد دلارو
            بیا بس کن
            دنبالت بگرده قلب بی صاحب کجارو
            من بدنام عالم شم
            شبام همه ماتم شن
            محاله از دوتا چشمای مهربون تو رد شم
            تو باید مال من باشی
            آروم تنم باشی
            خوبه دیوونگی با تو نمیخوام دیگه آدم شم
            من بدنام عالم شم
            شبام همه ماتم شن
            محاله از دوتا چشمای مهربون تو رد شم
            تو باید مال من باشی
            آروم تنم باشی
            خوبه دیوونگی با تو نمیخوام دیگه آدم شم
            ای وای دل تو
            آروم جونم شد
            حوصله کن
            میشم همونی که تو عاشقشی
            تموم دلشی
            نه نمیگذره دل از تویی که پاره ی تنشی
            ول نکن قلبمو که از این عالم و آدماش بدجوری خستم
            جونی نمونده تو تنم تو بشو بال و پر قلبی که عمریه شکسته است
            من بد نام عالم شم
            شبام همه ماتم شن
            محاله از دوتا چشمای مهربون تو رد شم
            تو باید مال من باشی
            آروم تنم باشی
            خوبه دیوونگی با تو نمیخوام دیگه آدم شم
            من بد نام عالم شم
            شبام همه ماتم شن
            محاله از دوتا چشمای مهربون تو رد شم
            تو باید مال من باشی
            آروم تنم باشی
            خوبه دیوونگی با تو نمیخوام دیگه آدم شم
            `,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2018 17:58:00"),
          },
          {
            id: 1,
            name: "ای دل غافل",
            img: "Alireza-Talischi-31571039501-Music-fa.com_.jpg",
            singer: "علیرضا طلیسچی",
            isLike: false,
            source: "Alireza Talischi - Ay Dele Ghafel.mp3",
            duration: 159,
            lyric: `ای دل غافل چیکار کردی تو با دل …
            نشون به اون نشونی خوب نشونی میکشونی دلو هر جا بخوای
            تو دلربایی کاش یه جوری میشد که بتونی با دلم راه بیای
            اگه من حرف حرف خودمه از ترسه که همه دنبالتن این رابطم چشم نخوره
            توی این شهر شلوغ آدم بد خیلی پره …
            ای دل غافل چیکار کردی تو با دل که دیگه عقلمو کامل دادم از دست
            ای دل غافل بکش منت عشقو بفهمون به دلش تو یه چیزیت هست
            یکی یدونم تویی چراغ خونم تویی غیر از خودتو ولش کن
            طرف حسابت منم مست و خرابت منم هرکیو اومد دکش کن آی دکش کن
            خندید خندید دلم هرجوری تنگید دیگه دست خودم نیست اگه فهمید اگه فهمید
            ای دل غافل چیکار کردی تو با دل که دیگه عقلمو کامل دادم از دست
            ای دل غافل بکش منت عشقو بفهمون به دلش تو یه چیزیت هست`,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2020 17:58:00"),
          },
          {
            id: 5,
            name: "زندگی جونم",
            img: "Alireza-Talischi-Zendegi-Joonam.jpg",
            singer: "علیرضا طلیسچی",
            isLike: false,
            source: "Alireza Talischi - Zendegi Joonam (320).mp3",
            duration: 217,
            lyric: `درست تویی که تونستی منو درست کنی دیگه هیشکی تو دلم به جز تو نی به جز تو نی
            تو قلبمی عشقم من شدی خودت بخوای نخوای عشق من فقط خودت به من میای به من میای
            خود ماه انقد ماه نی که تو انقد ماهی دیگه هیچ وقت با هیشکی نمیشه
            میمیرم من بی تو توی قلبمی تو یکی چقدر میتونه زندگی شه
            زندگی جونم من بدون تو یه لحظه ام نمیتونم قبل تو یادم نمیادش نمیدونم
            تو منم عین خودت کردی که دیوونم هم که دیوونم
            زندگی جونم من بدون تو یه لحظه ام نمیتونم قبل تو یادم نمیادش نمیدونم
            تو منم عین خودت کردی که دیوونم هم که دیوونم
            دیدم که میگم بعد تو کسی ام قد تو جا وا نکردش تو دلم
            اینو راحت بگم قفلم رو حسایی که من با دلم بهت دارم بهت دارم
            هیشکی برام مثل تو نی تو که باعث شدی چشمامون هیچ جایی نره
            چقدرم بهتره اینجوری حال هردومون تو رو دوست دارم دوست دارم
            زندگی جونم من بدون تو یه لحظه ام نمیتونم قبل تو یادم نمیادش نمیدونم
            تو منم عین خودت کردی که دیوونم هم که دیوونم
            زندگی جونم من بدون تو یه لحظه ام نمیتونم قبل تو یادم نمیادش نمیدونم
            تو منم عین خودت کردی که دیوونم هم که دیوونم`,
            album: "تک آهنگ",
            publishDate: new Date("October 1, 2020 17:58:00"),
          },
          {
            id: 4,
            name: "رمانتیک",
            img: "SogandRomantic.jpg",
            singer: "سوگند",
            isLike: false,
            source: "Sogand-Romantic.mp3",
            duration: 190,
            lyric: `تو شدی دلیل این که فراموش میکنم دردامو
            دره گوشت میزنم حرفهامو
            تویه چشم هات میبینم فردامو
            تو شدی دلیل این که دل من از همه دوره
            امشبو یادم میمونه
            نم نم بارون میزد قدم زدیم به سَمت خونه
            
            بگو یهویی از کجا پیدات شد
            تو جایی که همه چی‌ دراماتیک باشه
            فکرشم نمیکردم بشه با تو
            رابطمون اینقدر رمانتیک باشه
            
            گاهی وقتها خوبه عاشق بشه آدم
            گاهی وقتها یهویی میفته یادم
            یادته گل رُز قرمز به تو دادم
            کافیه نگاهش کنی‌ بیفتی یادم
            
            بگو یهویی از کجا پیدات شد
            تو جایی که همه چی‌ دراماتیک باشه فکرشم نمیکردم بشه با تو
            رابطمون اینقدر رمانتیک باشه
            سوگند
            `,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2019 17:58:00"),
          },
        ],
      },
      {
        name: "غمگین",
        creator: "امیرحسین",
        isLike: false,
        musics: [
          {
            id: 11,
            name: "بهت قول میدم",
            img: "Mohsen-Yeganeh-Behet-Ghol-Midam-Dynatonic-DJ.jpg",
            singer: "محسن یگانه",
            isLike: false,
            source: "Behet Ghol Midam-joyamusic.mp3",
            duration: 217,
            lyric: `خودت میخوای بری خاطره شی اما دلت میسوزه
            تظاهر میکنی عاشقمی این بازی هر روزه نترس
            آدم دم رفتن همش دلشوره میگیره دو روز بگذره این دلشوره ها از خاطرت میره
            بهت قول میدم سخت نیست لااقل برای تو راحت باش دورم از تو و دنیا تو
            
            راحت باش هیچ کس نمیاد جای تو دلشوره دارم من واسه فردای تو
            بهت قول میدم سخت نیست لااقل برای تو راحت باش دورم از تو و دنیا تو
            راحت باش هیچ کس نمیاد جای تو دلشوره دارم من واسه فردای تو
            از عشق هر چیزی و که میشناسمو از من گرفتی تو باقیمونده احساسمو از من گرفتی
            میخوای من باشی و یادت بره مایی وجود داره خودت آماده رفتنی و ترست نمیذاره
            اصلا نترس راحت برو بی من هیچ کی به جز تو منو یادش نیست
            فکر کردی کی از من خبر داره راحت برو هیشکی حواسش نیست    
            بهت قول میدم سخت نیست لااقل برای تو راحت باش دورم از تو و دنیا تو
            راحت باش هیچ کس نمیاد جای تو دلشوره دارم من واسه فردای تو
            بهت قول میدم سخت نیست لااقل برای تو راحت باش دورم از تو و دنیا تو
            راحت باش هیچ کس نمیاد جای تو دلشوره دارم من واسه فردای تو
            مسیرمون با هم یکی بود ولی مقصد جدا دلگیرم پردرد پربغضم خدا`,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2016 17:58:00"),
          },
          {
            id: 10,
            name: "ندارمت",
            img: "Mohsen-Yeganeh-Nadaramet.jpg",
            singer: "محسن یگانه",
            isLike: false,
            source: "Mohsen Yeganeh - Nadaramet.mp3",
            duration: 228,
            lyric: `بدون همیشه و هنوز یه دردی از تو با منه
              قلبم به محض رفتنت مرد و دیگه نمیزنه
              روا نبود که گم بشم لابه لای خاطرات
              رسمش این نبود ولی کهنه شد چه زود برات
              موند به قلبم حسرتش به دست بیارمت ولی عشق همینی هست که هست
              بخوام نخوام ندارمت ...
              این همه گذشت و باز تازه موند برام غمت ای کاش میشد برم عقب
              ای کاش ندیده بودمت ...
              موند به قلبم حسرتش به دست بیارمت ولی عشق همینی هست که هست
              بخوام نخوام ندارمت ...
              این همه گذشت و باز تازه موند برام غمت ای کاش میشد برم عقب
              ای کاش ندیده بودمت ...
              موند به قلبم حسرتش به دست بیارمت ولی عشق همینی هست که هست
              بخوام نخوام ندارمت ...
              برگرد به خونه ی دلم که آخرای جونشه از غم میخونن آجراش
              چه حسرتی ستونشه ...
              آتیشه رفتنت هنوز نور خونه ی منه یه قاصدک رو پشت بوم یه جغد رو شونه ی منه
              ساعتاش رو دور کند چشم تو چشم انتظار خودم نرم تو مشت سرنوشت گوش به حرف روزگار
              روز به روز غریبه تر با آدماش بدون حس گذشته و گذشت بیا باش به داد من برس
              موند به قلبم حسرتش به دست بیارمت ولی عشق همینی هست که هست
              بخوام نخوام ندارمت ...
              این همه گذشت و باز تازه موند برام غمت ای کاش میشد برم عقب
              ای کاش ندیده بودمت ...
              موند به قلبم حسرتش به دست بیارمت ولی عشق همینی هست که هست
              بخوام نخوام ندارمت ...
              این همه گذشت و باز تازه موند برام غمت ای کاش میشد برم عقب
              ای کاش ندیده بودمت ...`,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2019 17:58:00"),
          },
          {
            id: 60,
            name: "عاشق",
            img: "Siavash Ghomayshi - Ashegh.jpg",
            singer: "سیاوش قمیشی",
            isLike: false,
            source: "Siavash Ghomayshi  - Ashegh.mp3",
            duration: 280,
            lyric: `تو عاشق نبودی که درد دل عاشقا رو بفهمی
            تو بارون نموندی که دلگیریه این هوارو بفهمی
            تو گریه نکردی برای کسی تا بدونی چی میگم
            دلت تنگ نبوده میخندی تا از حس دلتنگی میگم
            تو تنها نموندی که حال دل بیقرارو بفهمی
            عزیزت نرفته که تشویش سوت قطارو بفهمی
            تو از دست ندادی بفهمی چیه ترس از دست دادن
            جای من نبودی بدونی چیه فرق بین تو و من
            تو هیچوقت نرفتی لب جاده تا انتظارو بفهمی
            پریشون نبودی که نگذشتن لحظه هارو بفهمی
            تو اونی که رفته چی میدونی از غصه جای خالی
            من اونم که مونده چی میدونم از قصه بی خیالی`,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2022 17:58:00"),
          },
        ],
      },
      {
        name: "طلیسچی",
        creator: "امیرحسین",
        isLike: false,
        musics: [
          {
            id: 2,
            name: "لیلا",
            img: "Alireza-Talischi-Leyla.jpg",
            singer: "علیرضا طلیسچی",
            isLike: false,
            source: "Alireza Talischi - Leyla (320).mp3",
            duration: 223,
            lyric: `آی لیلا لیلا لیلا لیلا لیلا یه گوشه چشمی بنداز بذار نیمه ی گمشدم دوباره بشه پیدا
            ای وای انگار تورو میخوامت الا بلا لیلا …
            لیلا بیا نازت کنم رو شونم احساست کنم هی از غریبه ها بگم یه خورده حساست کنم
            چشماتو آرایش کنی بزنم خرابش کنم کادوتو اخم کنی نخوای خودم برات بازش کنم
            آی لیلا لیلا لیلا لیلا لیلا یه گوشه چشمی بنداز بذار نیمه ی گمشدم دوباره بشه پیدا
            ای وای انگار تورو میخوامت الا بلا لیلا …
            آی لیلا لیلا لیلا لیلا لیلا یه گوشه چشمی بنداز بذار نیمه ی گمشدم دوباره بشه پیدا
            ای وای انگار تورو میخوامت الا بلا لیلا …
            لب دره باشم تو بگی واست میپرم تو اراده کنی دنیارم واست میخرم
            یه سفر با تو میچینم یه شمال تورو میبرم هر طرف تو باشی من به عشق تو اون ورم
            آی لیلا لیلا لیلا لیلا لیلا یه گوشه چشمی بنداز بذار نیمه ی گمشدم دوباره بشه پیدا
            ای وای انگار تورو میخوامت الا بلا لیلا …
            آی لیلا لیلا لیلا لیلا لیلا یه گوشه چشمی بنداز بذار نیمه ی گمشدم دوباره بشه پیدا
            ای وای انگار تورو میخوامت الا بلا لیلا ..`,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2021 17:58:00"),
          },
          {
            id: 1,
            name: "ای دل غافل",
            img: "Alireza-Talischi-31571039501-Music-fa.com_.jpg",
            singer: "علیرضا طلیسچی",
            isLike: false,
            source: "Alireza Talischi - Ay Dele Ghafel.mp3",
            duration: 159,
            lyric: `ای دل غافل چیکار کردی تو با دل …
            نشون به اون نشونی خوب نشونی میکشونی دلو هر جا بخوای
            تو دلربایی کاش یه جوری میشد که بتونی با دلم راه بیای
            اگه من حرف حرف خودمه از ترسه که همه دنبالتن این رابطم چشم نخوره
            توی این شهر شلوغ آدم بد خیلی پره …
            ای دل غافل چیکار کردی تو با دل که دیگه عقلمو کامل دادم از دست
            ای دل غافل بکش منت عشقو بفهمون به دلش تو یه چیزیت هست
            یکی یدونم تویی چراغ خونم تویی غیر از خودتو ولش کن
            طرف حسابت منم مست و خرابت منم هرکیو اومد دکش کن آی دکش کن
            خندید خندید دلم هرجوری تنگید دیگه دست خودم نیست اگه فهمید اگه فهمید
            ای دل غافل چیکار کردی تو با دل که دیگه عقلمو کامل دادم از دست
            ای دل غافل بکش منت عشقو بفهمون به دلش تو یه چیزیت هست`,
            album: "تک آهنگ",
            publishDate: new Date("October 18, 2020 17:58:00"),
          },
          {
            id: 5,
            name: "زندگی جونم",
            img: "Alireza-Talischi-Zendegi-Joonam.jpg",
            singer: "علیرضا طلیسچی",
            isLike: false,
            source: "Alireza Talischi - Zendegi Joonam (320).mp3",
            duration: 217,
            lyric: `درست تویی که تونستی منو درست کنی دیگه هیشکی تو دلم به جز تو نی به جز تو نی
            تو قلبمی عشقم من شدی خودت بخوای نخوای عشق من فقط خودت به من میای به من میای
            خود ماه انقد ماه نی که تو انقد ماهی دیگه هیچ وقت با هیشکی نمیشه
            میمیرم من بی تو توی قلبمی تو یکی چقدر میتونه زندگی شه
            زندگی جونم من بدون تو یه لحظه ام نمیتونم قبل تو یادم نمیادش نمیدونم
            تو منم عین خودت کردی که دیوونم هم که دیوونم
            زندگی جونم من بدون تو یه لحظه ام نمیتونم قبل تو یادم نمیادش نمیدونم
            تو منم عین خودت کردی که دیوونم هم که دیوونم
            دیدم که میگم بعد تو کسی ام قد تو جا وا نکردش تو دلم
            اینو راحت بگم قفلم رو حسایی که من با دلم بهت دارم بهت دارم
            هیشکی برام مثل تو نی تو که باعث شدی چشمامون هیچ جایی نره
            چقدرم بهتره اینجوری حال هردومون تو رو دوست دارم دوست دارم
            زندگی جونم من بدون تو یه لحظه ام نمیتونم قبل تو یادم نمیادش نمیدونم
            تو منم عین خودت کردی که دیوونم هم که دیوونم
            زندگی جونم من بدون تو یه لحظه ام نمیتونم قبل تو یادم نمیادش نمیدونم
            تو منم عین خودت کردی که دیوونم هم که دیوونم`,
            album: "تک آهنگ",
            publishDate: new Date("October 1, 2020 17:58:00"),
          },
        ],
      },
    ],
  },

  getters: {},

  mutations: {
    SET_USER(state, data) {
      state.user = data;
      console.log("yes");
    },

    SET_ISLOGIN(state, data) {
      state.isLogin = data;
    },

    playlistLikeToggle(state, name) {
      const index = state.playlists.findIndex(
        (playlist) => playlist.name === name
      );
      state.playlists[index].isLike = !state.playlists[index].isLike;
    },

    musicLikeToggle(state, params) {
      const playlistIndex = state.playlists.findIndex(
        (playlist) => playlist.name === params.playlistName
      );
      const musicIndex = state.playlists[playlistIndex].musics.findIndex(
        (music) => music.id === params.musicId
      );
      state.playlists[playlistIndex].musics[musicIndex].isLike =
        !state.playlists[playlistIndex].musics[musicIndex].isLike;
    },

    ADD_NEW_PLAYLIST(state, payload) {
      state.playlists.push(payload);
    },

    ADD_MUSIC_TO_PLAYLIST(state, payload) {
      state.playlists
        .find((playlist) => {
          return playlist.name === payload.playlistName;
        })
        .musics.push(payload.music);
    },
  },

  actions: {
    addNewPlaylist(context, value) {
      // CALL API
      context.commit("ADD_NEW_PLAYLIST", {
        name: value.playlist,
        isLike: false,
        musics: value.musics,
      });
    },

    addMusicToPlaylist({ commit, rootState }, playlistName) {
      // call API
      commit("ADD_MUSIC_TO_PLAYLIST", {
        playlistName: playlistName,
        music: rootState.musics.currentMusic,
      });
    },
  },
};

export default user;
