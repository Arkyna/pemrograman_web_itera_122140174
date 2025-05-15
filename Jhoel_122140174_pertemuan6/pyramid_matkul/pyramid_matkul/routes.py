def includeme(config):
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('get_matakuliah', '/matakuliah', request_method='GET')
    config.add_route('get_matakuliah_by_id', '/matakuliah/{id}', request_method='GET')
    config.add_route('create_matakuliah', '/matakuliah', request_method='POST')
    config.add_route('update_matakuliah', '/matakuliah/{id}', request_method='PUT')
    config.add_route('delete_matakuliah', '/matakuliah/{id}', request_method='DELETE')
