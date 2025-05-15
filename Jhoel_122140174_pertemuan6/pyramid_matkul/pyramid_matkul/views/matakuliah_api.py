from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPCreated, HTTPNoContent
from pyramid.response import Response
from ..models import Matakuliah
from sqlalchemy.exc import IntegrityError

@view_config(route_name='get_matakuliah', renderer='json')
def get_all(request):
    return [
        {
            "id": m.id,
            "kode_mk": m.kode_mk,
            "nama_mk": m.nama_mk,
            "sks": m.sks,
            "semester": m.semester
        } for m in request.dbsession.query(Matakuliah).all()
    ]

@view_config(route_name='get_matakuliah_by_id', renderer='json')
def get_one(request):
    mk = request.dbsession.get(Matakuliah, int(request.matchdict['id']))
    if not mk:
        return HTTPNotFound(json_body={"error": "Matakuliah not found"})
    return {
        "id": mk.id,
        "kode_mk": mk.kode_mk,
        "nama_mk": mk.nama_mk,
        "sks": mk.sks,
        "semester": mk.semester
    }

@view_config(route_name='create_matakuliah', renderer='json')
def create(request):
    data = request.json_body
    mk = Matakuliah(
        kode_mk=data['kode_mk'],
        nama_mk=data['nama_mk'],
        sks=data['sks'],
        semester=data['semester']
    )
    request.dbsession.add(mk)
    try:
        request.dbsession.flush()
    except IntegrityError:
        return Response(json_body={"error": "Kode MK sudah ada"}, status=400)
    return HTTPCreated(json_body={"message": "Matakuliah created"})

@view_config(route_name='update_matakuliah', renderer='json')
def update(request):
    mk = request.dbsession.get(Matakuliah, int(request.matchdict['id']))
    if not mk:
        return HTTPNotFound(json_body={"error": "Matakuliah not found"})
    data = request.json_body
    mk.kode_mk = data.get("kode_mk", mk.kode_mk)
    mk.nama_mk = data.get("nama_mk", mk.nama_mk)
    mk.sks = data.get("sks", mk.sks)
    mk.semester = data.get("semester", mk.semester)
    return {"message": "Matakuliah updated"}

@view_config(route_name='delete_matakuliah', renderer='json')
def delete(request):
    mk = request.dbsession.get(Matakuliah, int(request.matchdict['id']))
    if not mk:
        return HTTPNotFound(json_body={"error": "Matakuliah not found"})
    request.dbsession.delete(mk)
    return HTTPNoContent()
