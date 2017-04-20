'use strict';

angular.module('getirApp')
  .factory('Products', function() {
    const products = [
      {
        name: 'Altınkılıç Ezine Peynir',
        img: 'ezinepeynir.png',
        price: '19.90',
        count: 1,
        categories: ['yeni', 'sut&kahvaltilik'],
        subcategories: ['Yeni Ürünler', 'Peynir']
      },
      {
        name: 'Beluga Mercimek',
        img: 'belugamercimek.png',
        price: '9.40',
        count: 1,
        categories: ['yiyecek', 'fit&form'],
        subcategories: ['Taze Yemek']
      },
      {
        name: 'Fırında Tavuklu Dürüm',
        img: 'firindatavukludurum.png',
        price: '15.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Hazır Yemek']
      },
      {
        name: 'Köfteli Dürüm',
        img: 'koftelidurum.png',
        price: '19.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Hazır Yemek']
      },
      {
        name: 'Finish Klasik Jel',
        img: 'finishklasikjel.png',
        price: '15.90',
        count: 1,
        categories: ['yeni', 'evbakim'],
        subcategories: ['Yeni Ürünler', 'Bulaşık']
      },
      {
        name: 'Kahve Dünyası Gofrik 8\'li',
        img: 'gofrik.png',
        price: '18.90',
        count: 1,
        categories: ['yeni', 'atistirmalik'],
        subcategories: ['Yeni Ürünler', 'Gofret']
      },
      {
        name: 'Hub Kuskus',
        img: 'hubkuskus.png',
        price: '7.90',
        count: 1,
        categories: ['yiyecek', 'fit&form'],
        subcategories: ['Taze Yemek']
      },
      {
        name: 'Exotic Limonata',
        img: 'limonata.png',
        price: '4.50',
        count: 1,
        categories: ['yeni', 'icecek'],
        subcategories: ['Yeni Ürünler', 'Meyve Suyu']
      },
      {
        name: 'Double Bal & Badem',
        img: 'magnum.png',
        price: '4.00',
        count: 1,
        categories: ['yeni', 'dondurma'],
        subcategories: ['Yeni Ürünler', 'Dondurma']
      },
      {
        name: 'Mozarella Peynirli Sandviç',
        img: 'mozarellapeynirlisandvic.png',
        price: '10.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Sandviç']
      },
      {
        name: 'Kaburga Etli ve Peynirli Sandviç',
        img: 'kaburgaetlisandvic.png',
        price: '10.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Sandviç']
      },
      {
        name: 'Roastbeefli Sandviç',
        img: 'roastbeeflisandvic.png',
        price: '9.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Sandviç']
      },
      {
        name: 'Kaşarlı Sandviç',
        img: 'kasarlisandvic.png',
        price: '7.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Sandviç']
      },
      {
        name: 'Peynirli Su Böreği',
        img: 'peynirlisuboregi.png',
        price: '8.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Hazır Yemek']
      },
      {
        name: 'Oses Çiğ Köfte Dürüm',
        img: 'osescigkofte.png',
        price: '4.50',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Hazır Yemek']
      },
      {
        name: 'Çilekli Tatlımmm',
        img: 'cileklitatlim.png',
        price: '4.20',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Tatlı']
      },
      {
        name: 'Profiterol',
        img: 'profiterol.png',
        price: '5.50',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Tatlı']
      },
      {
        name: 'Framboazlı Cheesecake',
        img: 'framboazlicheesecake.png',
        price: '21.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Tatlı']
      },
      {
        name: 'Feast Pizza Menü',
        img: 'feastpizzamenu.png',
        price: '12.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Dondurulmuş']
      },
      {
        name: 'Feast Tostino',
        img: 'feasttostino.png',
        price: '6.50',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Dondurulmuş']
      },
      {
        name: 'Acı Biber Turşusu',
        img: 'acibibertursusu.png',
        price: '6.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Konserve & Turşu']
      },
      {
        name: 'Salatalık Tırşusu',
        img: 'salataliktursusu.png',
        price: '5.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Konserve & Turşu']
      },
      {
        name: 'Dardanel Ton Fasulyeli',
        img: 'dardaneltonfasulyeli.png',
        price: '6.90',
        count: 1,
        categories: ['yiyecek', 'fit-form'],
        subcategories: ['Konserve & Turşu', 'Bakliyat & Konserve']
      },
      {
        name: 'Berrak Cevizli Dobipa',
        img: 'berrakcevizlidobipa.png',
        price: '8.40',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Soslar']
      },
      {
        name: 'Knorr Sıvı Çorba Domatesli',
        img: 'domateslicorba.png',
        price: '7.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Çorba']
      },
      {
        name: 'Magnum Mini Fıstıklı',
        img: 'magnummini.png',
        price: '15.00',
        count: 1,
        categories: ['dondurma'],
        subcategories: ['Dondurma']
      },
      {
        name: 'Coca Cola',
        img: 'cola.png',
        price: '7.40',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Gazlı İçecek']
      },
      {
        name: 'Hayat Su 1 L.',
        img: 'su.png',
        price: '1.20',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Su & Maden Suyu']
      },
      {
        name: 'Sırma Maden Suyu',
        img: 'madensuyu.png',
        price: '4.50',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Su & Maden Suyu']
      },
      {
        name: 'Sütaş Günlük Süt',
        img: 'sutasgunluksut.png',
        price: '5.20',
        count: 1,
        categories: ['icecek', 'sut-kahvaltilik'],
        subcategories: ['Süt']
      },
      {
        name: 'Sütaş Ayran',
        img: 'sutasayran.png',
        price: '3.50',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Ayran & Kefir']
      },
      {
        name: 'Kefir Çilekli',
        img: 'kefircilekli.png',
        price: '3.90',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Ayran & Kefir']
      },
      {
        name: 'Fuse Tea Şeftali',
        img: 'fuseteaseftali.png',
        price: '2.70',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Soğuk Çay & Kahve']
      },
      {
        name: 'Nescafe Xpress',
        img: 'nescafexpress.png',
        price: '4.90',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Soğuk Çay & Kahve']
      },
      {
        name: 'Red Bull',
        img: 'redbull.png',
        price: '13.90',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Enerji İçeceği']
      },
      {
        name: 'Exotic Greyfurt Suyu',
        img: 'greyfurtsuyu.png',
        price: '7.90',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Meyve Suyu']
      },
      {
        name: 'Nescafe 2si 1 Arada',
        img: '2si1arada.png',
        price: '7.20',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Kahve']
      },
      {
        name: 'Kahve Dünyası Türk Kahvesi',
        img: 'turkkahvesi.png',
        price: '4.90',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Kahve']
      },
      {
        name: 'Damla Sakızlı Türk Kahvesi',
        img: 'damlasakizliturkkahvesi.png',
        price: '6.50',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Kahve']
      },
      {
        name: 'Kahve Dünyası Filtre Kahve',
        img: 'filtrekahve.png',
        price: '21.90',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Kahve']
      },
      {
        name: 'Natural Ihlamur Çiçeği',
        img: 'ihlamurcicegi.png',
        price: '19.90',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Çay']
      },
      {
        name: 'Lipton Slim Fit Çay',
        img: 'slimfitcay.png',
        price: '6.90',
        count: 1,
        categories: ['icecek', 'fit-form'],
        subcategories: ['Çay', 'İçecek']
      },
      {
        name: 'Powerrade',
        img: 'powerrade.png',
        price: '2.90',
        count: 1,
        categories: ['icecek'],
        subcategories: ['Sporcu İçeceği']
      },
      {
        name: 'Nesfit Karışık Meyveli',
        img: 'nesfit.png',
        price: '11.90',
        count: 1,
        categories: ['fit-form'],
        subcategories: ['Tahıllı Gevrek']
      },
      {
        name: 'Granola Kakao + Fındık',
        img: 'granola.png',
        price: '7.90',
        count: 1,
        categories: ['fit-form', 'sut-kahvaltilik'],
        subcategories: ['Granola', 'Kahvaltılık Gevrek']
      },
      {
        name: 'Tiramisu Aromalı Protein Bar',
        img: 'proteinbar.png',
        price: '10.90',
        count: 1,
        categories: ['fit-form'],
        subcategories: ['Protein Bar']
      },
      {
        name: 'Zero Shot Çilekli',
        img: 'zeroshot.png',
        price: '7.90',
        count: 1,
        categories: ['fit-form'],
        subcategories: ['Sporcu Takviye']
      },
      {
        name: 'Chia Tohumu',
        img: 'chia.png',
        price: '15.90',
        count: 1,
        categories: ['fit-form'],
        subcategories: ['Bakliyat & Konserve']
      },
      {
        name: 'Biscolata Stix',
        img: 'biskolata.png',
        price: '1.70',
        count: 1,
        categories: ['atistirmalik'],
        subcategories: ['Kek & Bisküvi']
      },
      {
        name: 'Biskrem',
        img: 'biskrem.png',
        price: '1.30',
        count: 1,
        categories: ['atistirmalik'],
        subcategories: ['Kek & Bisküvi']
      },
      {
        name: 'Patos Baharatlı',
        img: 'patos.png',
        price: '3.90',
        count: 1,
        categories: ['atistirmalik'],
        subcategories: ['Cips']
      },
      {
        name: 'Bahçeden Ceviz',
        img: 'bahceden.png',
        price: '13.90',
        count: 1,
        categories: ['fit-form', 'atistirmalik'],
        subcategories: ['Kuruyemiş']
      },
      {
        name: 'Ülker Fıstıklı Çikolata',
        img: 'cikolata.png',
        price: '4.70',
        count: 1,
        categories: ['atistirmalik'],
        subcategories: ['Çikolata']
      },
      {
        name: 'Uno Lavaş',
        img: 'lavas.png',
        price: '7.50',
        count: 1,
        categories: ['firindan'],
        subcategories: ['Unlu Mamüller']
      },
      {
        name: 'Karabiberli Füme Et',
        img: 'fumeet.png',
        price: '17.50',
        count: 1,
        categories: ['sut-kahvaltilik'],
        subcategories: ['Şarküteri']
      },
      {
        name: 'Sütaş Light Peynir',
        img: 'lightpeynir.png',
        price: '13.90',
        count: 1,
        categories: ['sut-kahvaltilik'],
        subcategories: ['Peynir']
      },
      {
        name: 'Keskinoğlu Organik Yumurta',
        img: 'yumurta.png',
        price: '16.50',
        count: 1,
        categories: ['sut-kahvaltilik'],
        subcategories: ['Yumurta']
      },
      {
        name: 'Nutella',
        img: 'nutella.png',
        price: '13.90',
        count: 1,
        categories: ['sut-kahvaltilik'],
        subcategories: ['Çikolata']
      },
      {
        name: 'Baldo Pirinç',
        img: 'baldo.png',
        price: '11.90',
        count: 1,
        categories: ['temelgida'],
        subcategories: ['Bakliyat & Makarna']
      },
      {
        name: 'Komili Zeytinyağı',
        img: 'komili.png',
        price: '37.90',
        count: 1,
        categories: ['temelgida'],
        subcategories: ['Sıvı Yağ']
      },
      {
        name: 'Pantene Şampuan',
        img: 'pantene.png',
        price: '14.50',
        count: 1,
        categories: ['kisiselbakim'],
        subcategories: ['Duş & Banyo']
      },
      {
        name: 'White Now CC',
        img: 'signal.png',
        price: '18.50',
        count: 1,
        categories: ['kisiselbakim'],
        subcategories: ['Ağız Bakım']
      },
      {
        name: 'Veet Tüy Dökücü',
        img: 'weet.png',
        price: '38.90',
        count: 1,
        categories: ['kisiselbakim'],
        subcategories: ['Ağda & Tüy Dökücü']
      },
      {
        name: 'Orkid Günlük Ped',
        img: 'orkid.png',
        price: '5.50',
        count: 1,
        categories: ['kisiselbakim'],
        subcategories: ['Hijyenik Ped']
      },
      {
        name: 'İpek Makyaj Temizleme Pedi',
        img: 'ipek.png',
        price: '5.50',
        count: 1,
        categories: ['kisiselbakim'],
        subcategories: ['Makyaj Malzemeleri', 'Vücut & El Bakım']
      },
      {
        name: 'Filtre Kahve Seti',
        img: 'kahveseti.png',
        price: '45.00',
        count: 1,
        categories: ['icecek', 'evaletleri'],
        subcategories: ['Kahve', 'Küçük Ev Aletleri']
      },
      {
        name: 'Ariel Sıvı Deterjan',
        img: 'arielsivi.png',
        price: '27.90',
        count: 1,
        categories: ['evbakim'],
        subcategories: ['Çamaşır']
      },
      {
        name: 'Omo Renkli Deterjan',
        img: 'omo.png',
        price: '15.90',
        count: 1,
        categories: ['evbakim'],
        subcategories: ['Çamaşır']
      },
      {
        name: 'Fairy Platinum',
        img: 'fairy.png',
        price: '8.90',
        count: 1,
        categories: ['evbakim'],
        subcategories: ['Bulaşık']
      },
      {
        name: 'Scotch Brite Mutfak Bezi',
        img: 'scotchbrite.png',
        price: '129.00',
        count: 1,
        categories: ['evbakim'],
        subcategories: ['Mutfak']
      },
      {
        name: 'Apple Kulaklık',
        img: 'apple.png',
        price: '129.00',
        count: 1,
        categories: ['teknoloji'],
        subcategories: ['Kulaklık']
      },
      {
        name: 'Samsung Seyahat Şarjı',
        img: 'samsung.png',
        price: '59.90',
        count: 1,
        categories: ['teknoloji'],
        subcategories: ['Şarj Aleti']
      },
      {
        name: 'Duracell İnce Pil',
        img: 'duracell.png',
        price: '15.50',
        count: 1,
        categories: ['teknoloji', 'ivirzivir'],
        subcategories: ['Pil']
      },
      {
        name: 'Viko Uzatma Kablosu',
        img: 'viko.png',
        price: '19.90',
        count: 1,
        categories: ['ivirzivir'],
        subcategories: ['Elektrik']
      },
      {
        name: 'National Geographic',
        img: 'derginat.png',
        price: '10.00',
        count: 1,
        categories: ['dergi-kitap'],
        subcategories: ['Dergi']
      },
      {
        name: 'Hayvan Çiftliği',
        img: 'kitap.png',
        price: '12.00',
        count: 1,
        categories: ['dergi-kitap'],
        subcategories: ['Kitap']
      },
      {
        name: 'Purina One Sığır Etli',
        img: 'purina.png',
        price: '27.50',
        count: 1,
        categories: ['evcilhayvan'],
        subcategories: ['Kedi']
      },
      {
        name: 'Pedigree Yavru',
        img: 'pedegree.png',
        price: '6.50',
        count: 1,
        categories: ['evcilhayvan'],
        subcategories: ['Köpek']
      },
      {
        name: 'Uni Wipes Islak Mendil',
        img: 'uni.png',
        price: '4.90',
        count: 1,
        categories: ['bebek', 'evbakim'],
        subcategories: ['Bebek Bakım', 'Kağıt Ürünleri']
      },
      {
        name: 'Prima Premium 1 Beden',
        img: 'prima.png',
        price: '49.90',
        count: 1,
        categories: ['bebek'],
        subcategories: ['Çocuk Bezi']
      },
      {
        name: 'Durex Yok Ötesi',
        img: 'durex.png',
        price: '38.90',
        count: 1,
        categories: ['cinselsaglik'],
        subcategories: ['Prezervatif']
      },
      {
        name: 'OKEY Kayganlaştırıcı',
        img: 'kayganlastirici.png',
        price: '26.90',
        count: 1,
        categories: ['cinselsaglik'],
        subcategories: ['Kayganlaştırıcı']
      },
      {
        name: 'Penti Fit L Beden',
        img: 'penti.png',
        price: '7.30',
        count: 1,
        categories: ['aksesuar'],
        subcategories: ['Kadın Çorap']
      },
      {
        name: 'Nexcare Yara Bandı',
        img: 'nexcare.png',
        price: '5.90',
        count: 1,
        categories: ['saglik'],
        subcategories: ['Genel Sağlık']
      },
    ];

    _.forEach(products, function (obj, i) {
      obj.id = i;
    });

    const API = {
      get: function (query, sub, arr) {
        if (query.category) {
          const pr = _.filter(products, p => p.categories.indexOf(query.category) > -1);
          _.forEach(sub.subcategories, function (s) {
            const x = _.filter(pr, p => p.subcategories.indexOf(s) > -1);
            arr.push(x);
          });
        }
      }
    };
    return API;
});