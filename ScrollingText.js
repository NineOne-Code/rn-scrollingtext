import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function ScrollingText() {
  return (
    <ScrollView>
      <View style={styles.wrapperArtikel}>
        <Text>
          {'\t'}React Native adalah kerangka aplikasi seluler sumber terbuka
          yang dibuat oleh Facebook, Inc. [3] Ini digunakan untuk mengembangkan
          aplikasi untuk Android [4] , Android TV [5] , iOS , macOS [6] , tvOS
          [7] , Web [8] , Windows [6] dan UWP [9] dengan memungkinkan pengembang
          untuk menggunakan React bersama dengan kemampuan platform asli [10].
          {'\n'}
        </Text>
        <Text style={styles.subheader}>Sejarah</Text>
        <Text>
          {'\t'}Pada tahun 2012 Mark Zuckerberg berkomentar, "Kesalahan terbesar
          yang kami buat sebagai perusahaan adalah bertaruh terlalu banyak pada
          HTML dibandingkan dengan native". [11] Dia berjanji bahwa Facebook
          akan segera memberikan pengalaman seluler yang lebih baik.{'\n'}
          {'\t'}Di dalam Facebook , Jordan Walke menemukan cara untuk
          menghasilkan elemen UI untuk iOS dari thread JavaScript latar
          belakang. [12] Mereka memutuskan untuk menyelenggarakan Hackathon
          internal untuk menyempurnakan prototipe ini agar dapat membangun
          aplikasi asli dengan teknologi ini. [13]{'\n'}
          {'\t'}Setelah pengembangan berbulan-bulan, Facebook merilis versi
          pertama untuk Konfigurasi JavaScript React pada tahun 2015. Selama
          pembicaraan teknis, [14] Christopher Chedeau menjelaskan bahwa
          Facebook telah menggunakan React Native dalam produksi untuk Aplikasi
          Grup dan Aplikasi Manajer Iklan mereka. [15]{'\n'}
        </Text>
        <Text style={styles.subheader}>Implementasi</Text>
        <Text>
          {'\t'}Prinsip kerja React Native hampir identik dengan React kecuali
          React Native tidak memanipulasi DOM melalui Virtual DOM . Ini berjalan
          dalam proses latar belakang (yang menafsirkan JavaScript yang ditulis
          oleh pengembang) langsung di perangkat akhir dan berkomunikasi dengan
          platform asli melalui serialisasi , asynchronous , dan batched Bridge.
          [16] [17] [18]{'\n'}
          {'\t'}Komponen React membungkus kode asli yang ada dan berinteraksi
          dengan API asli melalui paradigma UI deklaratif React dan JavaScript .
          Ini memungkinkan pengembangan aplikasi asli untuk tim pengembang baru,
          dan dapat membuat tim asli yang ada bekerja lebih cepat. [19]{'\n'}
          {'\t'}React Native tidak menggunakan HTML atau CSS . Sebaliknya, pesan
          dari utas JavaScript digunakan untuk memanipulasi tampilan asli. React
          Native juga memungkinkan pengembang untuk menulis kode asli dalam
          bahasa seperti Java untuk Android dan Objective-C atau Swift untuk iOS
          yang membuatnya lebih fleksibel.{'\n'}
        </Text>
        <Text
          style={styles.hyperLink}
          onPress={() =>
            Linking.openURL(
              'https://translate.google.com/translate?u=https://en.wikipedia.org/wiki/React_Native&hl=id&sl=en&tl=id&client=srp&prev=search',
            )
          }>
          SUMBER
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subheader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  wrapperArtikel: {
    margin: 10,
    padding: 10,
    backgroundColor: '#e7e7de',
  },
  hyperLink: {
    textDecorationLine: 'underline',
    color: '#33e',
  },
});
