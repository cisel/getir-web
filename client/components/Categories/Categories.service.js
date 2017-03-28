'use strict';

angular.module('getirApp')
  .factory('Categories', function() {
    const categories = [
      {
        name: 'Yeni Ürünler',
        img:'yeni.png',
        path: 'yeni',
        subcategories: ['Yeni Ürünler']
      },
      {
        name: 'Yiyecek',
        img:'yiyecek.png',
        path: 'yiyecek',
        subcategories: ['Taze Yemek', 'Sandviç', 'Hazır Yemek', 'Tatlı', 'Dondurulmuş', 'Konserve & Turşu', 'Soslar', 'Çorba']
      },
      {
        name: 'Dondurma',
        img:'dondurma.png',
        path: 'dondurma',
        subcategories: ['Dondurma']
      },
      {
        name: 'İçecek',
        img:'icecek.png',
        path: 'icecek',
        subcategories: ['Gazlı İçecek', 'Su & Maden Suyu', 'Süt', 'Soğuk Çay & Kahve', 'Enerji İçeceği', 'Meyve Suyu', 'Ayran & Kefir', 'Çay', 'Kahve', 'Yoğurtlu İçecek', 'Sporcu İçeceği']
      },
      {
        name: 'Fit & Form',
        img:'fit.png',
        path: 'fit-form',
        subcategories: ['Taze Yemek', 'Tahıllı Gevrek', 'Granola', 'İçecek', 'Protein Bar', 'Sporcu Takviye', 'Bakliyat & Konserve', 'Süt Ürünleri', 'Kraker & Kek', 'Kuruyemiş']
      },
      {
        name: 'Atıştırmalık',
        img:'atistirmalik.png',
        path: 'atistirmalik',
        subcategories: ['Çikolata', 'Gofret', 'Kuruyemiş', 'Kek & Bisküvi', 'Kraker', 'Cips', 'Sakız & Şekerleme']
      },
      {
        name: 'Fırından',
        img:'firindan.png',
        path: 'firindan',
        subcategories: ['Unlu Mamüller']
      },
      {
        name: 'Kişisel Bakım',
        img:'kisiselbakim.png',
        path: 'kisiselbakim',
        subcategories: ['Duş & Banyo', 'Ağız Bakım', 'Parfüm & Deodorant', 'Tıraş Malzemeleri', 'Cilt Bakım', 'Hijyenik Ped', 'Ağda & Tüy Dökücü', 'Makyaj Malzemeleri', 'Vücut & El Bakım', 'Dudak Bakım', 'Yüz Bakım', 'Saç Bakım']
      },
      {
        name: 'Süt & Kahvaltılık',
        img:'kahvaltilik.png',
        path: 'sut-kahvaltilik',
        subcategories: ['Hazır Kahvaltı', 'Çikolata', 'Süt', 'Kahvaltılık Gevrek', 'Yumurta', 'Peynir', 'Şarküteri', 'Zeytin', 'Yoğurt', 'Yoğurtlu İçecek', 'Bal', 'Tereyağ & Margarin']
      },
      {
        name: 'Temel Gıda',
        img:'temelgida.png',
        path: 'temelgida',
        subcategories: ['Sıvı Yağ', 'Bakliyat & Makarna', 'Sos', 'Tereyağ & Margarin', 'Çorba', 'Baharat', 'Şeker']
      },
      {
        name: 'BiTaksi',
        img:'bitaksi.png',
        path: 'bitaksi'
      },
      {
        name: 'Ev Bakım',
        img:'evbakim.png',
        path: 'evbakim',
        subcategories: ['Çamaşır', 'Bulaşık', 'Temizlik', 'Kağıt ÜrÜnleri', 'Mutfak', 'Yüzey Temizlik', 'Oda Kokusu', 'Böcek İlacı']
      },
      {
        name: 'Teknoloji',
        img:'teknoloji.png',
        path: 'teknoloji',
        subcategories: ['Şarj Aleti', 'Telefon Aksesuar', 'Kulaklık', 'Aydınlatma', 'Pil']
      },
      {
        name: 'Dergi & Kitap',
        img:'dergi.png',
        path: 'dergi-kitap',
        subcategories: ['Dergi', 'Kitap']
      },
      {
        name: 'Evcil Hayvan',
        img:'evcilhayvan.png',
        path: 'evcilhayvan',
        subcategories: ['Kedi', 'Köpek']
      },
      {
        name: 'Bebek',
        img:'bebek.png',
        path: 'bebek',
        subcategories: ['Bebek Bakım', 'Cocuk Bezi', 'Mama']
      },
      {
        name: 'Cinsel Sağlık',
        img:'cinselsaglik.png',
        path: 'cinselsaglik',
        subcategories: ['Prezervatif', 'Kayganlaştırıcı']
      },
      {
        name: 'Aksesuar',
        img:'aksesuar.png',
        path: 'aksesuar',
        subcategories: ['Şemsiye', 'Kadın Çorap']
      },
      {
        name: 'Sağlık',
        img:'saglik.png',
        path: 'saglik',
        subcategories: ['Genel Sağlık', 'Ayak Sağlığı']
      },
      {
        name: 'Küçük Ev Aletleri',
        img:'evaletleri.png',
        path: 'evaletleri',
        subcategories: ['Küçük Ev Aletleri']
      },
      {
        name: 'Ivır Zıvır',
        img:'ivirzivir.png',
        path: 'ivirzivir',
        subcategories: ['Aydınlatma', 'Pil', 'Elektrik', 'Piknik', 'Ampül', 'Kırtasiye']
      }
    ];

    const API = {
      get: function () {
        return categories;
      },
      getSubcategory: function (query) {
        if (query.category) {
          return _.filter(categories, c => c.path === query.category);
        }
      }
    };

    return API;
});