const BemVindo = ({ nomeUsuario, totalHabitos }) => {
    const nomeFormatado = nomeUsuario.toUpperCase()

    const mensagem = totalHabitos != null
    ? (totalHabitos > 0
        ? `Você tem ${totalHabitos} hábito(s) cadastrado(s).`
        : 'Nenhum hábito cadastrado ainda. Que tal começar?')
    : 'Bem-vindo ao My Daily Habits!'


    return (
        <div style={{ textAlign: 'center' }}>
      <h2>Olá, {nomeFormatado}!</h2>
      <p>{mensagem}</p>
        </div>
    )

}

export default BemVindo