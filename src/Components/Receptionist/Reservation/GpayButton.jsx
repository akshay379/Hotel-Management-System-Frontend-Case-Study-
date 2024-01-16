import React from 'react'
import GooglePayButton from '@google-pay/button-react'
import { useHistory } from 'react-router-dom';

function GpayButton({total}) {
    const history=useHistory()
    return (
      
        <div>
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                    {
                    type: 'CARD',
                    parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA']
                    },
                    tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                    },
                    },
                ],
                merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: total,
                    currencyCode: 'INR',
                    countryCode: 'IN',
                },
                shippingAddressRequired: true,
                callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                }}
                onLoadPaymentData={paymentRequest => {
            history.push('/receptionist-success')
                }}
                onPaymentAuthorized={paymentData => {
                    console.log('Payment Authorised Success', paymentData)
                    return { transactionState: 'SUCCESS'}
                    
                }
                }
                onPaymentDataChanged={paymentData => {
                    console.log('On Payment Data Changed', paymentData)
                    return { }
                }
                }
                existingPaymentMethodRequired='false'
                buttonColor='black'
                buttonType='Buy'
            />
        </div>
    )
}

export default GpayButton
