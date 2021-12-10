let Password = "123456789"
if (Password.length > 3 && (Password.includes('_') || Password.includes('-'))) {
    console.log('Пароль надёжный')
}
else {
    console.log('Пароль недостаточно надёжный')
}