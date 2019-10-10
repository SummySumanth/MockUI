// ADD ITEM WINDOW HANDLERS
addObj = (searchItem, superItem) =>{
	let isAdded = false;
	superItem.content.forEach((item, index) =>{
		if( item.path === searchItem.path && !isAdded){
			let index = superItem.content.findIndex( indexItem => (
				indexItem.title === searchItem.title &&
				(indexItem.type === searchItem.type && searchItem.type === entrytype.FOLDER)
					?
					true
					:
					(indexItem.fileType === searchItem.fileType)
			));
			console.log('index is ', index);
			if(index !== -1){
				isAdded = true;
				superItem.content.push(searchItem);
			}else{
				(searchItem.type === entrytype.FOLDER)
					?
					alert('Folder name already exists')
					:
					alert('File name already exists');
			}
		}
		if(item.type === entrytype.FOLDER){
			this.addObj(searchItem, item)
		}
	});
};