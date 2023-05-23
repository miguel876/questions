import React, { useState } from 'react'
import ShareIcon from '@mui/icons-material/Share';
import ShareScreen from 'pages/ShareScreen';
import { StyledIconButton, StyledSearchContainer } from './searchbox.style';
import { StyledTextField } from 'styles/inputs.style';

interface Props {
  onChange: (filter: string) => void,
  shareText: string
}

const SearchBox = ({onChange, shareText}: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <StyledSearchContainer>
      <StyledTextField id="outlined-basic" placeholder="Search your question!" onChange={(evt) => onChange(evt.target.value)} />
      <StyledIconButton onClick={() => setOpen(true)}>
        <ShareIcon />
      </StyledIconButton>
      <ShareScreen open={open} setOpen={setOpen} content_url={shareText} />
    </StyledSearchContainer>
  )
}

export default SearchBox