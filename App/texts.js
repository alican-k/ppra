const texts = {
    authenticateTitle: { tr: 'Giriş' },
    authenticateMessage: { tr: 'Lütfen telefon numaranızı girdikten sonra sms ile gelen onay kodunu giriniz' },

    screenTitlePreRegister: { tr: 'Üyelik' },
    screenMessagePreRegister: { tr: 'Lütfen aşağıda istenilen bilgileri giriniz' },

    screenTitleApprove: { tr: 'Sms Onay' },
    screenMessageApprove: { tr: 'Lütfen telefonunuza gelen sms kodunu giriniz' },

    screenTitleHome: { tr: 'Ana Sayfa' },
    screenMessageHome: { tr: 'Başarıyla giriş yapıldı' },
    
    inputLabelName: { tr: 'İSİM' },
    inputPlaceholderName: { tr: 'İsminiz' },
    inputLabelSurname: { tr: 'SOYİSİM' },
    inputPlaceholderSurname: { tr: 'Soyisminiz' },
    inputLabelMobile: { tr: 'MOBİL' },
    inputPlaceholderMobile: { tr: 'Mobil telefon numaranız' },
    inputLabelTckn: { tr: 'T.C.' },
    inputPlaceholderTckn: { tr: 'T.C. kimlik numaranız' },
    inputLabelBirthday: { tr: 'DOĞUM TARİHİ' },
    inputPlaceholderBirthday: { tr: 'Doğum tarihiniz' },
    inputLabelSms: { tr: 'SMS' },
    inputPlaceholderSms: { tr: 'Sms onay kodu' },

    buttonTitleLogin: { tr: 'Giriş yap' },
    buttonTitleRegister: { tr: 'Üye ol' },
    buttonTitleApprove: { tr: 'Onayla' },
    buttonTitleBack: { tr: 'Geri dön' },
    buttonTitleValidation: { tr: 'Test et' },

    requestError: { tr: 'İstek gönderilirken hata oluştu. İnternet bağlantınızı kontrol edin.' },
}

const LANGUAGE = 'tr'

const getText = key => {
    if(!Boolean(texts[key]))
        console.log('**** text not found:', key)
    return texts[key][LANGUAGE]
}

export default getText