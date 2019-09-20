import React from 'react'
import { Table, Divider, Tag, List, Avatar, Icon, Rate, Button } from 'antd'
import ProviderModal from './ProviderModal'

const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '#',
    title: `José Ragazzan`,
    avatar: 'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/31318033_1013884815443013_8130543906472329216_n.jpg?_nc_cat=102&_nc_oc=AQlxFBqdlLKH5gOd6zkA5fOXMb4DHRWbKD65ICnczmKV5eRkY3S0F6zl9ZNv0AY-SAg&_nc_ht=scontent.fcpq14-1.fna&oh=1190872cc8a08101bd82941524f95359&oe=5DCBC7DD',
    description:
      'Animador, Designer e Mestre dos Magos.',
    content:
      'Trabalhou bem no projeto X por mais que Y. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
  })
}

const data = [
  {
    key: '1',
    avatar: 'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/31318033_1013884815443013_8130543906472329216_n.jpg?_nc_cat=102&_nc_oc=AQlxFBqdlLKH5gOd6zkA5fOXMb4DHRWbKD65ICnczmKV5eRkY3S0F6zl9ZNv0AY-SAg&_nc_ht=scontent.fcpq14-1.fna&oh=1190872cc8a08101bd82941524f95359&oe=5DCBC7DD',
    name: 'José Ragazzan',
    rate: 4,
    age: 20,
    address: 'Marechal N50 PR',
    tags: ['Body Mechanics', 'Acting']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    rate: 5,
    address: 'London No. 1 Lake Park',
    tags: ['Rigging']
  },
  {
    key: '3',
    name: 'Joe Black',
    rate: 2,
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['Character Modelling']
  }
]

const ProviderList = props => {
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: avatar => <Avatar src={avatar || 'https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar-300x300.png'} />
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Endereço',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </span>
      )
    },
    {
      title: 'Desempenho Geral',
      dataIndex: 'rate',
      key: 'rate',
      render: rate => <Rate value={rate} />
    },
    {
      title: 'Ações',
      key: 'action',
      render: (text, record) => (
        <span>
          <a><ProviderModal buttonType='link' buttonText='Editar' title='José Ragazzan' submitText='Salvar' cancelText='Cancelar'> Conteúdo </ProviderModal></a>
        </span>
      )
    }
  ]

  return (<Table columns={columns} dataSource={data} />)
}

export default ProviderList
