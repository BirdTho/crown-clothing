import React from 'react';
import { connect } from 'react-redux';

import {MenuItem} from '..';
import {RootState, selectDirectorySections} from '../../redux';
import {SectionModel} from '../../types';

import './Directory.scss';

interface StateProps {
  readonly sections: SectionModel[]
}

type Props = StateProps

export const componentDirectory = React.memo(({sections}: Props) => {
  return (
    <div className='directory-menu'>
      {sections.map((item, i) => <MenuItem key={`menuitem_${item.id || i}`} data={item}/>)}
    </div>
  );
});

const mapStateToProps = (state: RootState) => ({
  sections: selectDirectorySections(state)
});

export const Directory = connect(mapStateToProps)(componentDirectory);
