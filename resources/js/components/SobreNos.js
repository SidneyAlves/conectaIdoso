import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import turma2018 from './imgs/turma2018.jpg'

const SobreNos = () => (
 <div>
     <Header /> 
     <div className=' row p-0 w-100 h-100'>
            <div className='col-md-7'>
                <img src={turma2018} className='h-100 w-100 pt-3 pl-2'></img>
            </div>
            <div  className='col-md-4 w-100 h-100 ml-3'><br></br>
                <h2 className=' mt-4' align="center">Sobre o PET</h2>
                <div >
                    <p align="justify" className='w-100 h-100 mt-3'>O Programa de Educação Tutorial (PET) é um programa de comprovada excelência, o qual compromete-se fundamentalmente em aprimorar os cursos de graduação. Trabalha com quatro vertentes principais que são: Ensino, Cultura, Pesquisa e Extensão e forma cidadãos que aprendem durante três anos a trabalhar em equipe, a irradiar para os demais colegas o espírito de liderança e o compromisso com a geração de conhecimento para a solução dos mais diversos problemas. É o único programa institucional voltado para graduação que trabalha no formato de grupo interdisciplinar, ancorado em alunos e professores e que recebe avaliação institucional e não individual.
Cada grupo PET conta com um conjunto de alunos bolsistas, um professor-tutor, vários professores colaboradores e, muitas vezes, conta ainda com alunos voluntários que ajudam nas atividades do grupo. 
                    </p>
                </div>              

            </div>

        </div>
     <Footer />
 </div>
)

export default SobreNos