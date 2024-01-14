import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import DownArrow from "../icon/DownArrow";
import FilterSvg from "../icon/Filter";
import DollarIcon from "../icon/DollarIcon";
import InfoCircle from "../icon/InfoCircle";
import UpDownArrow from "../icon/UpDownArrow";
import ReceiptIcon from "../icon/ReceiptIcon";
import axios from "axios";

const TradePage = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('1');
  const [outputValue, setOutputValue] = useState('0.000029');
  const tokeIn = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
  const tokenOut = '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6';

  // const senderAddress = global.smartAccount.publicAddress;
  // const receiverAddress = global.smartAccount.publicAddress;

  const handleChange = async (text) => {
      await axios.get(`https://aggregator-api.kyberswap.com/polygon/api/v1/routes?tokenIn=${tokeIn}&tokenOut=${tokenOut}&amountIn=${text * 1000000}`)
        .then((res) => {
          setOutputValue(res.data.data.routeSummary.amountOut);
        });
  }



  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <Icon
              name={'keyboard-backspace'}
              size={30}
              color={'#f0f0f0'}
              type="materialicons"
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.heading}>
              BTC/USDC
            </Text>
          </View>
          <LinearGradient
            useAngle={true}
            angle={150}
            colors={['#5038E1','#B961FF']}
            style={styles.spotButton}
          >

            <Text style={styles.spotText}>
              Spot
            </Text>
            <DownArrow />

          </LinearGradient>
        </View>
      {/*<ScrollView>*/}

        <View style={styles.section}>
          <LinearGradient
            colors={['#183E27','#1D5433']}
            style={styles.sectionBuy}
            >
            <Text style={styles.sectionTextBuy}>
              Buy
            </Text>
          </LinearGradient>

          <View
            style={styles.sectionSell}
          >
            <Text style={styles.sectionTextSell}>
              Sell
            </Text>
          </View>
        </View>


        <View style={styles.section}>
          <LinearGradient
            useAngle={true}
            angle={150}
            colors={['#5038E1','#B961FF']}
            style={styles.sectionMarket}
          >
            <Text style={styles.sectionTextMarket}>
              Market
            </Text>
          </LinearGradient>
          <View style={styles.sectionLimit}>
            <Text style={styles.sectionTextSell}>
              Limit
            </Text>
          </View>
          <View style={styles.sectionStop}>
            <Text style={styles.sectionTextSell}>
              Stop
            </Text>
          </View>

        </View>

        <View style={styles.investSection}>
          <Text style={styles.investText}>
            How much would you like to invest?
          </Text>
          <View style={styles.investInput}>
            {/*<Text style={styles.investInputText}>*/}
            {/*  1*/}
            {/*</Text>*/}
            <TextInput
              style={styles.investInputText}
              placeholder=""
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                handleChange(text);
              }}
              placeholderTextColor="#ffffff"
              keyboardType="numeric"
            />
            <Text style={styles.investInputCurrency}>
              $
            </Text>
          </View>
          <View style={styles.youWillGet}>
            <Text style={styles.youWillGetText}>
              You'll get
            </Text>
            <Text style={styles.youWillGetAmount}>
              {outputValue} BTC
            </Text>
            <FilterSvg />
          </View>
        </View>

        <View style={styles.orderSumaryHeader}>
          <Text style={styles.orderSumaryText}>
            Order Summary
          </Text>
          <DownArrow />
        </View>

        <View style={styles.orderSumary}>

          <View style={styles.orderSumaryItem}>
            <View style={styles.orderSumaryItemLeft}>
              <View style={styles.orderSumaryItemIcon}>
                <DollarIcon />
              </View>
              <View style={styles.orderSumaryItemText}>
                <Text style={styles.orderSumaryItemTextTitle}>
                  Entry Price
                </Text>
                <Text style={styles.orderSumaryItemTextValue}>
                  $34,909.12
                </Text>
              </View>
            </View>
            <InfoCircle />
          </View>

          <View style={styles.orderSumaryItem}>
            <View style={styles.orderSumaryItemLeft}>
              <View style={styles.orderSumaryItemIcon}>
                <DollarIcon />
              </View>
              <View style={styles.orderSumaryItemText}>
                <Text style={styles.orderSumaryItemTextTitle}>
                  Slippage
                </Text>
                <Text style={styles.orderSumaryItemTextValue}>
                  2%
                </Text>
              </View>
            </View>
            <Text style={{
              color: '#C397FF'
            }}>
              Change
            </Text>
          </View>

          <View style={styles.orderSumaryItem}>
            <View style={styles.orderSumaryItemLeft}>
              <View style={styles.orderSumaryItemIcon}>
                <ReceiptIcon />
              </View>
              <View style={styles.orderSumaryItemText}>
                <Text style={styles.orderSumaryItemTextTitle}>
                  Estimated fee
                </Text>
                <Text style={styles.orderSumaryItemTextValue}>
                  $0.01
                </Text>
              </View>
            </View>
            <InfoCircle />
          </View>

        </View>
        <View
          style={{
            height: 100,
          }}
        />
      {/*</ScrollView>*/}
    </SafeAreaView>
  );
}

export default TradePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "4%",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    marginTop: 24,
    paddingBottom: -8,
    paddingHorizontal: "4%",
  },
  heading: {
    fontFamily: 'Sarala-Bold',
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 700,
    marginLeft: 16,
  },
  spotButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    marginTop: 24,
    paddingHorizontal: 10,
    borderRadius: 100,
    borderTopWidth: 2,
    borderTopColor: "#CBCFFE",
    borderLeftColor: "#CBCFFE",
    borderLeftWidth: 2,
    borderRightColor: "#CBCFFE",
    borderRightWidth: 2,
  },
  spotText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 700,
    marginRight: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    marginTop: 24,
    borderWidth: 2,
    borderColor: "#2C2C2C",
    borderRadius: 100,
    backgroundColor: '#151515',
  },
  sectionTextBuy: {
    fontFamily: 'Sarala-Bold',
    fontSize: 16,
    color: '#ACFF8E',
    fontWeight: 700,
  },
  sectionTextSell: {
    fontFamily: 'Sarala-Bold',
    fontSize: 16,
    color: '#848484',
    fontWeight: 700,
    marginRight: 10,
  },
  sectionBuy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 100,
    borderTopWidth: 2,
    borderTopColor: "#64FCA1",
    borderLeftColor: "#64FCA1",
    borderLeftWidth: 2,
    borderRightColor: "#64FCA1",
    borderRightWidth: 2,
    marginRight: 16,
    width: '50%',
  },
  sectionSell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginRight: 16,
    width: '50%',
  },
  sectionMarket: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 100,
    borderTopWidth: 2,
    borderTopColor: "#CBCFFE",
    borderLeftColor: "#CBCFFE",
    borderLeftWidth: 2,
    borderRightColor: "#CBCFFE",
    borderRightWidth: 2,
    width: '33%',
  },
  sectionLimit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '33%',
  },
  sectionStop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '33%',
  },
  sectionTextMarket: {
    fontFamily: 'Sarala-Bold',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 700,
    marginRight: 10,
  },
  investSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    marginTop: 56,
  },
  investText: {
    fontFamily: 'Sarala',
    fontSize: 16,
    color: '#7E7E7E',
    fontWeight: 400,
    marginRight: 10,
  },
  investInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  investInputText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 56,
    color: '#ffffff',
    // fontWeight: 700,
    marginRight: 10,
  },
  investInputCurrency: {
    fontFamily: 'Sarala-Bold',
    fontSize: 56,
    color: '#252525',
    fontWeight: 700,
  },
  youWillGet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  youWillGetText: {
    fontFamily: 'Sarala',
    fontSize: 16,
    color: '#7E7E7E',
    fontWeight: 400,
    marginRight: 6,
  },
  youWillGetAmount: {
    fontFamily: 'Sarala-Bold',
    fontSize: 16,
    color: '#7E7E7E',
    fontWeight: 700,
    marginRight: 6,
  },
  orderSumaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    marginTop: 56,
  },
  orderSumaryText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 700,
    marginRight: 10,
  },
  orderSumary: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  orderSumaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  orderSumaryItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    width: '80%',
  },
  orderSumaryItemIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#1C1C1C',
    borderRadius: 100,
  },
  orderSumaryItemText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 4,
    width: '80%',
  },
  orderSumaryItemTextTitle: {
    fontFamily: 'Sarala',
    fontSize: 16,
    color: '#7E7E7E',
    fontWeight: 400,
    marginRight: 10,
  },
  orderSumaryItemTextValue: {
    fontFamily: 'Sarala-Bold',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 700,
    marginRight: 10,
  },
});
