<div class="dashboard-wraper">
    <div class="page-content">
        <div class="table-wrapper">
            @if ($table->isHasFilter())
                <div class="table-configuration-wrap"
                     @if (request()->has('filter_table_id')) style="display: block;" @endif>
                    <span class="configuration-close-btn btn-show-table-options"><i class="fa fa-times"></i></span>
                    {!! $table->renderFilter() !!}
                </div>
            @endif
            <div class="portlet light portlet-no-padding">
                <div class="portlet-title">
                    <div class="caption">
                        <div class="wrapper-action">
                            @if ($actions)
                                <div class="btn-group">
                                    <a class="btn btn-secondary dropdown-toggle" href="#"
                                       data-bs-toggle="dropdown">{{ trans('core/table::table.bulk_actions') }}
                                    </a>
                                    <ul class="dropdown-menu">
                                        @foreach ($actions as $action)
                                            <li>
                                                {!! $action !!}
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            @if ($table->isHasFilter())
                                <button
                                    class="btn btn-primary btn-show-table-options">{{ trans('core/table::table.filters') }}</button>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="portlet-body">
                    <div
                        class="table-responsive @if ($actions) table-has-actions @endif @if ($table->isHasFilter()) table-has-filter @endif"
                        style="overflow-x: inherit">
                        @section('main-table')
                            {!! $dataTable->table(compact('id', 'class'), false) !!}
                        @show
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@include('core/table::modal')
@include('core/table::partials.modal-item', [
    'type' => 'info',
    'name' => 'modal-confirm-renew',
    'title' => __('Renew confirmation'),
    'content' => __('Are you sure you want to renew this property, it will takes 1 credit from your credits'),
    'action_name' => __('Yes'),
    'action_button_attributes' => [
        'class' => 'button-confirm-renew',
    ],
])

@push('scripts')
    {!! $dataTable->scripts() !!}
@endpush

@php
    Theme::asset()->usePath(false)->add('table-css', asset('vendor/core/core/table/css/table.css'));
    Theme::asset()->usePath(false)->add('datatables-css', asset('/vendor/core/core/base/libraries/datatables/media/css/dataTables.bootstrap.min.css'));
    Theme::asset()->usePath(false)->add('datatables-buttons-css', asset('/vendor/core/core/base/libraries/datatables/extensions/Buttons/css/buttons.bootstrap.min.css'));
    Theme::asset()->usePath(false)->add('datatables-extensions-css', asset('/vendor/core/core/base/libraries/datatables/extensions/Responsive/css/responsive.bootstrap.min.css'));
    Theme::asset()->usePath()->add('base-core-css', 'css/account.css');
@endphp
