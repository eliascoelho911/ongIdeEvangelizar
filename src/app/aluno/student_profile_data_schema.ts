import { FormSchema } from '@/components/templates/form/form-schema';

export const studentProfileDataSchema: FormSchema = {
    categories: [
        {
            name: 'Dados Pessoais',
            id: 'dados-pessoais',
            groups: [
                {
                    name: 'Informações Pessoais',
                    fields: [
                        {
                            id: 'nome-completo',
                            name: 'Nome Completo',
                            type: 'text',
                            is_required: true,
                        },
                        {
                            id: 'data-nascimento',
                            name: 'Data de Nascimento',
                            type: 'text',
                            is_required: true,
                            pattern: '^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\\d{4}$'
                        },
                        {
                            id: 'cpf',
                            name: 'CPF',
                            type: 'text',
                            is_required: true,
                            pattern: '^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$'
                        },
                        {
                            id: 'rg',
                            name: 'RG',
                            type: 'text',
                            is_required: true,
                            pattern: '^\\d{2}\\.\\d{3}\\.\\d{3}-\\d{1}$'
                        },
                        {
                            id: 'sexo',
                            name: 'Sexo',
                            type: 'select',
                            is_required: true,
                            options: ['Masculino', 'Feminino', 'Outro']
                        }
                    ]
                },
                {
                    name: 'Naturalidade',
                    fields: [
                        {
                            id: 'country',
                            name: 'País',
                            type: 'select',
                            is_required: true,
                            options: ['Brasil'] // Adicionar outros países
                        },
                        {
                            id: 'state',
                            name: 'Estado',
                            type: 'select',
                            is_required: true,
                            options: ['São Paulo', 'Rio de Janeiro'] // Adicionar outros estados
                        },
                        {
                            id: 'city',
                            name: 'Cidade',
                            type: 'select',
                            is_required: true,
                            is_dynamic: true,
                        }
                    ]
                }
            ]
        },
        {
            name: 'Endereço',
            id: 'endereco',
            groups: [
                {
                    name: 'Endereço Residencial',
                    fields: [
                        {
                            id: 'cep',
                            name: 'CEP',
                            type: 'text',
                            is_required: true,
                            pattern: '^\\d{5}-\\d{3}$'
                        },
                        {
                            id: 'street',
                            name: 'Logradouro',
                            type: 'text',
                            is_required: true,
                            is_dynamic: true,
                        },
                        {
                            id: 'numero',
                            name: 'Número',
                            type: 'text',
                            is_required: true,
                        },
                        {
                            id: 'complemento',
                            name: 'Complemento',
                            type: 'text',
                        },
                        {
                            id: 'neighborhood',
                            name: 'Bairro',
                            type: 'text',
                            is_required: true,
                            is_dynamic: true,
                        },
                        {
                            id: 'city',
                            name: 'Cidade',
                            type: 'text',
                            is_required: true,
                            is_dynamic: true,
                        },
                        {
                            id: 'state',
                            name: 'Estado',
                            type: 'text',
                            is_required: true,
                            is_dynamic: true,
                        }
                    ]
                }
            ]
        },
        {
            name: 'Pais ou Responsáveis',
            id: 'pais-ou-responsaveis',
            groups: [
                {
                    name: 'Responsável',
                    fields: [
                        {
                            id: 'responsavel-nome-completo-1',
                            name: 'Nome Completo',
                            type: 'text',
                            is_required: true,
                        },
                        {
                            id: 'responsavel-cpf-1',
                            name: 'CPF',
                            type: 'text',
                            is_required: true,
                            pattern: '^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$'
                        },
                        {
                            id: 'responsavel-rg-1',
                            name: 'RG',
                            type: 'text',
                            is_required: true,
                            pattern: '^\\d{2}\\.\\d{3}\\.\\d{3}-\\d{1}$'
                        },
                        {
                            id: 'responsavel-parentesco-1',
                            name: 'Parentesco',
                            type: 'text',
                            is_required: true,
                        },
                        {
                            id: 'responsavel-telefone-1',
                            name: 'Telefone',
                            type: 'text',
                            is_required: true,
                            pattern: '^\\(\\d{2}\\) \\d{4,5}-\\d{4}$'
                        }
                    ]
                },
                {
                    name: 'Responsável',
                    fields: [
                        {
                            id: 'responsavel-nome-completo-2',
                            name: 'Nome Completo',
                            type: 'text',
                            is_required: true,
                        },
                        {
                            id: 'responsavel-cpf-2',
                            name: 'CPF',
                            type: 'text',
                            is_required: true,
                            pattern: '^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$'
                        },
                        {
                            id: 'responsavel-rg-2',
                            name: 'RG',
                            type: 'text',
                            is_required: true,
                            pattern: '^\\d{2}\\.\\d{3}\\.\\d{3}-\\d{1}$'
                        },
                        {
                            id: 'responsavel-parentesco-2',
                            name: 'Parentesco',
                            type: 'text',
                            is_required: true,
                        },
                        {
                            id: 'responsavel-telefone-2',
                            name: 'Telefone',
                            type: 'text',
                            is_required: true,
                            pattern: '^\\(\\d{2}\\) \\d{4,5}-\\d{4}$'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Outras informações',
            id: 'outras-informacoes',
            groups: [
                {
                    name: 'Informações Adicionais',
                    fields: [
                        {
                            id: 'situacao',
                            name: 'Situação',
                            type: 'select',
                            options: ['Ativo', 'Inativo'],
                            editable: false
                        },
                        {
                            id: 'data-ingresso',
                            name: 'Data de Ingresso',
                            type: 'text',
                            pattern: '^\\d{2}\\/\\d{2}\\/\\d{4}$',
                            editable: false
                        },
                        {
                            id: 'data-saida',
                            name: 'Data de Saída',
                            type: 'text',
                            pattern: '^\\d{2}\\/\\d{2}\\/\\d{4}$',
                            editable: false
                        },
                        {
                            id: 'observacoes',
                            name: 'Observações',
                            type: 'textarea',
                        }
                    ]
                }
            ]
        }
    ]
};
