import React from 'react'

export default class Search extends React.Component {
  render() {
    let { data, filter } = this.props;
    let filtered = [];
    data.forEach((item, index) => {
      let { detail } = item;
      let regex = new RegExp(filter, "i");
      if (detail.match(regex)) {
        let output = (
          <div 
            className="kegiatan-search-item" 
            key={index}
            onClick={() => this.props.openSelectedKegiatan(item)}
          >
            {detail}
          </div>
        );
        filtered.push(output);
      }
    });
    return (
      <div className="kegiatan-search-list" id="kegiatan-search-list">
        {filtered.length === 0 ? 'Kegiatan tidak ditemukan..' : filtered}
      </div>
    )
  }
}