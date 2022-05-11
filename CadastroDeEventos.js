const imputName = require('readline-sync')

const nameEvent = imputName.question('Informe nome do evento: ')

//Data do evento
const imputDate = require('readline-sync')

const DataEscolhida = imputDate.question(
  'Informe a data do evento: Ex: 00/00/0000: '
)

const DataList = DataEscolhida.split('/').reverse().join('/')

const MiliDataFormatada = Date.parse(DataList)

const DataAtual = Date.now()

if (MiliDataFormatada < DataAtual) {
  console.log('Data invalida. Inferior a data atual.')
} else {
  const idade = require('readline-sync')
  const idadeParticipante = idade.question('Informe sua idade:')

  if (idadeParticipante < 18) {
    console.log('Cadastro invalido. Participante deve ter mais de 18 anos.')
  } else {
    const Convidados = require('readline-sync')
    const QuantConvidados = Convidados.question(
      'Informe numero de convidados: '
    )

    if (QuantConvidados > 100) {
      console.log('Limite de convidos excedido.')
    } else {
      console.log('Evento Cadastrado')
      console.log('Nome do Evento: ' + nameEvent + ' Data: ' + DataEscolhida)
    }
  }
}

console.log('Fim do programa.')
