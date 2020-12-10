import styled from "@emotion/styled";
import { AnimatePresence, AnimateSharedLayout, isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Message } from '../../assets/message-circle.svg';
import { ReactComponent as Phone } from '../../assets/phone.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';

const navData = [
  {
    Icon: Home,
    title: 'Home',
    color: (opacity) => `rgba(91, 226, 136, ${opacity || 0.25})`
  },
  {
    Icon: Message,
    title: 'Message',
    color: (opacity) => `rgba(227, 91, 182, ${opacity || 0.25})`
  },
  {
    Icon: Phone,
    title: 'Contact',
    color: (opacity) => `rgba(255, 112, 157, ${opacity || 0.25})`
  },
  {
    Icon: Settings,
    title: 'Settings',
    color: (opacity) => `rgba(112, 116, 255, ${opacity || 0.25})`
  }
]

const Nav = styled.div`
  display: flex;
  min-width: 300px;
  border-radius: 25px;
  background: white;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

const NavItem = styled.div`
  padding: 0.5rem;
  background: ${({ isSelected, color }) => isSelected ? color(0.1) : 'transparent' };
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    stroke: ${({ isSelected, color }) => isSelected ? color(1) : 'rgba(0,0,0,0.3)' };
  }
`

const Item = ({ isSelected, Icon, title, setSelected, index, color, setBackground }) => {
  return (
      <NavItem 
        isSelected={isSelected} 
        onClick={() => {
          setSelected(index)
          setBackground(color(1))
        }}
        color={color}
      >
        <Icon style={{ marginRight: '0.25rem', minWidth: '25px' }}/>
        <AnimatePresence>
          {isSelected && 
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              exit={{ width: 0, color: 'gray' }}
              style={{ fontWeight: 600, overflow: 'hidden', fontSize: '0.75rem', color: color(1) }}
              transition={{ duration: 0.5, }}
            >
              {title}
            </motion.div>
          }
        </AnimatePresence>
      </NavItem>
  )
}

export default ({ setBackground }) => {
  const [selected, setSelected] = useState(0)

  useState(() => {
    setBackground(navData[0].color(1))
  }, [])

  return (
    <Nav>
      {navData.map((d, i) => 
          <Item 
            key={i}
            {...d} 
            setSelected={setSelected} 
            index={i} 
            isSelected={selected === i} 
            setBackground={setBackground}
          />
      )}
    </Nav>
  )
}