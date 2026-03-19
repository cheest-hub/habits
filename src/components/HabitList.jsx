import { useState, useEffect, useRef} from 'react'
import HabitCard from './HabitCard'



function HabitList() {

  const nomeInputRef = useRef(null)

  const [habits, setHabits] = useState(() => {
    // Esta função executa UMA VEZ — na montagem
    const stored = localStorage.getItem('my-daily-habits')
    
  
    // Se não há nada salvo — usa o array inicial
    if (!stored) return [
      { id: 1, nome: 'Exercício',  descricao: 'Treino de força',   meta: 5, ativo: true,  diasFeitos: 5 },
      { id: 2, nome: 'Leitura',    descricao: 'Livro ou artigo',   meta: 7, ativo: true,  diasFeitos: 3 },
      { id: 3, nome: 'Meditação',  descricao: 'Respiração e foco', meta: 7, ativo: false, diasFeitos: 0 },
      { id: 4, nome: 'Hidratação', descricao: 'Beber 2L de água',  meta: 7, ativo: true,  diasFeitos: 6 },
    ]
  
    // Se há dados salvos — tenta fazer o parse
    try {
      return JSON.parse(stored)
    } catch {
      // Se o JSON estiver corrompido — volta pro array inicial
      return []
    }
  }) 

  const [form, setForm] = useState({
    novoNome:'',
    novaDescricao:'',
    novaCategoria:'',
    novaMeta:'',    
  });

  useEffect(() => {
    localStorage.setItem('my-daily-habits', JSON.stringify(habits))
    console.log('💾 Hábitos salvos:', habits.length)
  }, [habits]) 

  const removerHabit = (id) => {
    console.log('Removendo hábito com id:', id)
    setHabits(habits.filter(habit => habit.id !== id))
  }
  const handleChange = (e) => {
    const { name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });    
  };

  const adicionarHabit = (event) => {
    event.preventDefault()

    if (!form.novoNome.trim()) {
      alert('Informe um nome para o hábito.')
      return
    }

    const novoHabit = {
      id: Date.now(),
      nome: form.novoNome,
      descricao: form.novaDescricao,
      meta: form.novaMeta,
      ativo: true,
      diasFeitos: 0,
      categoria: form.novaCategoria || 'Geral',
    }

    console.log('Novo hábito adicionado:', novoHabit)
    setHabits([...habits, novoHabit])

    // Limpar os campos após adicionar
    setForm({
      novoNome:'',
      novaDescricao:'',
      novaCategoria:'',
      novaMeta:'',
    })

     // Devolve o foco para o campo nome — useRef em ação
  nomeInputRef.current?.focus()

    
  }

  return (
    <section>
      <form onSubmit={adicionarHabit} className="habit-form">
        <div>
          <label>
            Nome do hábito
            <input
              type="text"
              name="novoNome"
              value={form.novoNome}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição
            <input
              type="text"
              name="novaDescricao"
              value={form.novaDescricao}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Categoria
            <input
              type="text"
              name="novaCategoria"
              value={form.novaCategoria}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Meta (dias por semana)
            <input
              type="number"
              name="novaMeta"
              min="1"
              max="7"
              value={form.novaMeta}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Adicionar hábito</button>
      </form>

      <ul>
        {habits.length === 0
          ? <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>
          : <p>Você tem {habits.length} hábito(s) cadastrado(s).</p>
        }

        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            nome={habit.nome}
            descricao={habit.descricao}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}
      </ul>
    </section>
  )
}

export default HabitList