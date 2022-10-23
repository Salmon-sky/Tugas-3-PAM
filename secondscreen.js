import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Jadwal = [
  {
    id: '1',
    asal: 'Lampung',
    tujuan: 'Jakarta',
    maskapai: 'Elephant Air',
    waktu : '05 Maret 2022, 17:30',

  },
  {
    id: '2',
    asal: 'Lampung',
    tujuan: 'Riau',
    maskapai: 'Pig Air',
    waktu : '16 juni 2022, 05:15',
  },
  {
    id: '3',
    asal: 'Lampung',
    tujuan: 'Bengkulu',
    maskapai: 'Boar Air',
    waktu : '25 Maret 2022, 13:00',
  },
  {
    id: '4',
    asal: 'Lampung',
    tujuan: 'Bekasi',
    maskapai: 'Alien Air',
    waktu : '27 Mei 2022, 07:00',
  },
  {
    id: '5',
    asal: 'Lampung',
    tujuan: 'Medan',
    maskapai: 'Kijang Air',
    waktu : '22 September 2022, 15:00',
  },
  {
    id: '6',
    asal: 'Jakarta',
    tujuan: 'Lampung',
    maskapai: 'Elephant Air',
    waktu : '01 Agustus 2022, 12:00',
  },
  {
    id: '7',
    asal: 'Lampung',
    tujuan: 'Bogor',
    maskapai: 'Lion Air',
    waktu : '11 Agustus 2022, 16:45',
  },
  {
    id: '8',
    asal: 'ITERA',
    tujuan: 'Belwis',
    maskapai: 'OKI Air',
    waktu : '23 Agustus 2022, 10:40',
  },
  {
    id: '9',
    asal: 'Way Dadi',
    tujuan: 'Kedaton',
    maskapai: 'Gojek Air',
    waktu : '11 september 2022, 08:00',
  },

];


const Penerbangan = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <Entypo name="aircraft" size={24} color="black" />
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <FontAwesome name="user" size={24} color="white" />
          </View>
          <Text style={styles.heading2}>Penerbangan Tersedia</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={Jadwal}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Muhammad Khadziq - 120140233</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDFCF6',
  },
  header:{
    width:'100%',
    backgroundColor: '#367E18',
    padding:20,
    
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  heading2: {
    color: 'white',
    textAlign: 'center',
    top : 20,
  },
  top: {
    top : 20,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#BCCEF8',
    fontWeight: 'bold',
    marginBottom: 20,
    padding:20,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Penerbangan;