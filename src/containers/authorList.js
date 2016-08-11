import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import selectAuthor from '../actions/select_author'
import Author from '../components/author'

const AuthorList = ({authors, selectAuthor}) => (
  <div>
   {authors.map((author,idx) => (
      <Author 
      id={idx} 
      key={idx}
      {...author}
      Clicked={() => selectAuthor({name: author.name,id: idx, selected: !author.selected})}
      />
      )
    )}
  </div>
  )

function mapStateToProps(state) {
  return {
    authors: state.authors
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectAuthor}, dispatch)
}

const SmartAuthorList = connect(mapStateToProps, mapDispatchToProps)(AuthorList)

export default SmartAuthorList