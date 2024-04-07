var provinceCoordinates = [];
var lineCoordinates = []
var graphicAttBB = {
    "Diện Tích": "340,02 km²",
    "Dân Số": "105.371 người"
}
var url_img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13fFRl2v/xbzIpkIRABIGELkSauPYSQkCwIIqgSFdYLI/urq7t2d+qK2tZXd19XFdd14a49K6ACCiKdAHbukov0pKggIaEFEj9/RF4HlQg5dxnzpm5P+/Xa17+41xzzTA593fOzLkvCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALBbF0kvSFonKf/obZ2k5yWd5WFfAADABbGSXpZUJqniJLdSSS9JivGoRwAAYFCspI908oX/p7fFIgQAABDyXlH1F/9jt3940ikAADCii0592v9UXwd09qBfAEES6XUDAFx1m2r3dx6QdKvhXgAAQJCsV80//R+7fe1BvwAAwIBDqn0AyPOgXwBBEuF1AwBcVeHw/ndKan301kpSgqT4o7eAKkNCgaRCSXsk7ZC0U9ImSZ+JEAH4FgEACG9OA4AT5aoMAmslvXf0RiAAACAIanv6343bEUkfqPLHhQluPmkAAGzn9aJ/sluupFcl/cK9pw7gVPgKAAhvXn4FUB0VkuZJekLS50F6zAaSeklqqsodDzdJ+lTSgSA9PgAArvP6k351b+WSFkjqLynahdchRtINkuZKOnyCxz8saYykli48NgAAQef1wl6b2z5JL0q6WpVXG9RWgqRrVLmt8f5qPvZ+SZc5eEwgZPAVABDe/P4VQFWKVXkVwdeSNh+9HZCUo8pRxlLlQp8kqZGkDkdvXSRdpNqdTTgs6VJJXzppHPA7AgAQ3kI9AHhls6SzVRlAgLDELAAA+Ln2kvp53QTgJgIAAJzYCK8bANxEAACAE+vodQOAm/gNABDe+A1A7ZXKnUsSAV8gAADhjQDgDMdIhC2+AgAAwEIEAAAALBTldQMA/CsyIkJnn5Gk7mc3VceWDZTaLFHNT49XQp0oxUQHVFJarh8OHdH3eYe1YVeu1u/K0ZqN+/XF1u9VXsG3D4Cf8f0WEN4crcLfzRiqhomxNb7f/tzDWvhJpsYt2qYV675VCGcBjpEIW7y5gfDmaOktfe+XjhvYtCdXz85cp4kfblNZecglAY6RCFu8uYHw5nkAOGbD7oN6fOKXmrNqVygFAY6RCFu8uYHw5psAcMyOb/M1ZsFmvbFwi344dMR4fcM4RiJs8eYGwpvvAsAx+UUlmrdmj6Yv26FFn2WpuLTctcdygGMkwhZvbiC8+TYAHC8nv1iLPsvS0q/2aul/vtXWrLygPG41cIxE2OLNDYS3kAgAP5X9faHW7zyor3b8oI27c/XN3kM6kHtY+w4e1oG8wz/7/xsmxuq0erFqVL+OUpsl6szmiTqzWX0NenKJ01Y4RiJssQ8AAN9JaRinlIZxuuL8lFP+fzn5xWoQH6MIlmmgxggAAEJWUkKM1y0AIYutgAEAsBABAAAACxEAAACwEAEAAAALEQAAALAQAQAAAAsRAAAAsBABAAAACxEAAACwEAEAAAALEQAAALAQAQAAAAsRAAAAsBABAAAACzEOGMBJPf/2eu38Ll87v8vXjm/zVXSkVPlFJSouLVdZWYViowNKjI9WXGyUmp8epzZN6qlV0wR1aF5fF7ZvpCZJdb1+CgBOIsLrBgC4qsLLB2/ZOF4XdzhdV13QTH0uaqHGDeoE9fGjeo9zWoJjJMIWb24gvHkaAI4XGRGhC9s30uAebXRTr7Y6rV6s649JAABOjjc3EN58EwCOVycmoAHprfWrvh10ScfTXXscAgBwcry5gfDmywBwvLTOjfXYzeeq5znJxmsTAICT480NhDffB4BjMro01W+u66DrLm2p6CgzFygRAICT480NhLeQCQDHpDSM06DubdT3khbq2rmxogK1CwMH84vV6MYpTtvhGImwxZsbCG8hFwCOVz8+Rhe2b6SL2jdSp1YN1PL0BLVqmqC42CjFREUqEBmhvMIS5RYUa/e+fG3NytOGXQe1asM+ff1NjsorHD99jpEIW7y5gfAW0gHABzhGImyxEyAAABYiAAAAYCECAAAAFiIAAMCJlXndAOAmAgAAnNgBrxsA3EQAAIAT+9zrBgA3EQAA4MSme90A4CaucQXCm9N9AEokrZW0VNIGSVsl7ZRULClPUpykJEmnS+okqYukSyR1lRTt8LG9tFmVz6XE60YAAKiNCoe3+Fo+bqKkGyXNV+WP6Zz2EcxbgaQLavm8AQDwBaeLoQmtJL0o6YiBfty+HZB0maHnDQCAZ/wQAI45Q9I4SYcN9GX6VihprKQUw88ZAABP+CkAHNNY0u8l7TLQn9Pb+qO9NHTpuQIA4Ak/BoBjoiUNljRXUr6BXmuy6D8n6TyXnx8AAJ7xcwA4Xh1JV0n6hyqvNDC54GdLmipplKTmwXpCgN9xGSAQ3pwu4l4dI+qr8rLCs47eUiU1klRPUsJx/82TdPDofw9JylXlJXwbj942SMoJcu9ASCAAAOEtVAMAAJexEyAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAA4cvE3zfHCCBM8ccNhKcISS8bqDNWDAQCACBkPK3KSYAmbn8Ocu8AAKAWfitzi/+x2++C+gwAAECNjJBULvMBoFzS7UF8HgAAoJr6SyqR+cX/2K1U0qCgPRsAAFClnpIOy73F/9jtiKTeQXpOAADgFC6SdEjuL/7HbgWSugblmQEAgBPqLOmAgrf4H7vlSDonCM8PAAD8REtJuxX8xf/YLUtSG9efJQAA+F+NJW2Sd4v/sds2SckuP1cAACCpvqQv5P3if+z2laTTXH3GAABYLk7Scnm/6P/0tkZSgovPGwAAa0VLWiDvF/uT3T6QFOvaswcAwEKRkqbJ+0W+qtvbkgIuvQYAAFglQtKrMrxYx8TEVsTExLoRAl4VEwQBAHDM5GS/CkkVgUCg4vU3/lXxrwmTK6KiotwIAUwQBADAAeOT/SIiIiqefe6Fir37cir27supePGlVyoiIiLcCAFMEAQAoBZcmew3+tHH/3fxP3Z78s9/cSMAMEEQAIAacmWy3z333v+zxf/Y7bf33OdGCGCCIAAA1eTKZL8RI0eddPE/drv9v+50IwQwQRDwIS7XAfzlIkkLVbnhjzF9rumr51/8pyIjI0/5/3Xv0VPfbN+mTZs2mnz4gKQbJC2TtMdkYQC1x6U6gH90VuUi2dBk0YyMHpo4ZZpiYqq3R09JSYlGjRyuxR9+YLINSToo6TJJX5ouDKDmCACAP7SUtFJSC5NFzz//As14a67i4mp2QuHw4cMaMugGrV2z2mQ7kpQtKV3SDtOFAdQMAQDwXmNV7u/f3mTRjh076e0576pBUlKt7p+Xl6cB1/fVuq+/MtmWJG2X1E3SXtOFAVQfAQDwVn1JSySda7Jo69ZtNGfeQjVp0sRRne+/P6B+ffto+7athjr7X19L6iHpB9OFAVTPqX8RBMBNcZLmyfDi37RpU02fNdvx4i9JDRs20oyZs9WseXMDnf1IF1UONmKCIOARAgDgjWhJs1R5KtyYxPr1NWnqTLVs2cpYzZRmzTR56kwlJZ1mrOZRF0uaLSYIAp4gAADBFylpgqSrTRatW7euJk2ers6dzzJZVpLUvn0HTZ46QwkJxj+wXy5pqrgkGQg6AgAQXBGSXpY0xGTR6JgYvTluoi686GKTZX/k3PPO17/GT1ZsrPEP7NdLekP8JgkIKlI3EFxPS7rXZMFAIKCXXx2jq3r3MVn2hFq2aqUOnTpp/rx3VF5ebrL0OZJiJC02WRTAyREAgOD5raSnTBaMiIjQX5/9u24cONhk2VNq1y5VLVq01HsLF5gu3U1SoaSPTRcG8HMEACA4Rkh6VYZPc49+9HHdett/mSxZLZ07n6UGSUn6aPGHpktfrsrNgr4wXRjAjxEAAPf1lzRJhv/e7rnvAd13/+9MlqyR8847X6UlJaZ3C4yQ1EfSJknrTRYG8GMEAMBdPVV5qVuMyaIjRo7S408Y/TahVtK7dVdebq6++Pwzk2UjJfWT9JmkbSYLA/g/BADAPZ5O9gsWJggCoYnLboKvs6TbJF0hqbWkeE+7QUi5rGcvjZ8wRdExRk8oOFZSXKyRI4ZpyUf8iB81UiBpp6QPJI2RtMHTbixDAAieGEnPSbpTnHlBLVx40cWaPnO26tat63UrJ1RUVKTBA6/Xp5+s9boVhKYySa9IekBSsce9WIEAEBwJkt6V1N3rRhCaOnXqrNlz5yuxfn2vWzmlvNxcXd/vGm3YwO/3UGtLJfWVlO9xH2GPAOC+eFUu/j087gMhytRkv2BxcYIg7PGxpN6SDnndSDgjALiLxR+ONG3aVHPffc/ocJ9gyM7K0nV9eysrM9PrVhC6CAEu88fPiMMTiz8ccWOyX7C4OEEQ9kiT9J6kel43Eq4IAO5g8Ycjbk72CxYXJwjCHoQAFxEAzGPxhyPBmOwXLC5OEIQ9CAEuIQCYxeIPRwKBgP758mvqcVkvr1sxJr1bhl4d86aioqK8bgWhixDgAq5HN4fFH454MdkvWFycIAh7tFDlpdQzxT4BRhAAzGDxh2NeTfYLFhcnCMIehACDCADOsfjDMa8n+wWLSxMEYRdCgCEEAGdY/OGYXyb7BYtLEwRhF0KAAQSA2mPxh2N+m+wXLC5NEIRdCAEOsRNg7bD4w7GMjB6aOGWaYmLsvESupKREo0YO1+IPP/C6FYQ2dgysJQJAzbH4w7Hzz79AM96aq7i4OK9b8dThw4c1ZNAN/CYAThECaoEAUDOuLf5pjZtq/hV9VC862nRp1NK+w0W6bOE72px70Gjdjh076e0576pBUpLRuqEqLy9PA67vq3Vff2W0btt6iVrap5+S69odsvykoLRU1324UMu+zXajPCGghuz64tEZFn+L5BYXq8+iBcYX/9at22jqjLdZ/I+TmJioaTPeUtt2qUbrbj+Up96L5uuHI0eM1kXtxUdF6Z3Lr1b3pilulGezoBoiAFQPi79FCktL1W/xe/ryhwNG6zZt2lTTZ80OmbG+wdSwYSPNmDlbzZo3N1p3fc4PuvbDBcovKTFaF7VHCPAPAkDVWPwtUlJerkFLFmnld3uN1g3lyX7B4tYEwU/279OAJe/rSFmZ0bqoPUKAPxAATo3F3yLlFRUaueIjvZe1x2jdcJjsFyxuTRBcnJ2l4csWq6yiwmhd1B4hwHvsA3ByLP4WqZD0m9UrNHH7FqN1o2NiNG7CZHVN72a0bjhLTk7ReeddoHfmzlaZwU/tm3IPanfBIV3Xsg2/fvaJmMhI3di6rVbv+0678o3/do99AqpAADgxFn/LPPL5Wr24cZ3RmoFAQC+/OkZX9e5jtK4NWrZqpQ6dOmn+vHdUXl5urO5/fvheJeXl6pnczFhNOEMI8A4B4OdY/C3zj43rNPqLT43WDOfJfsHi1gTBld99q7pRUerauKnRuqg9QoA3CAA/xuJvmYnbt+jXHy83XjfcJ/sFi1sTBD/KzlJKXLzOa3i60bqoPUJA8BEA/g+Lv2Xm7t6pESs+UrnhH4bZMtkvWNyaILgwc7c6NGigzg3MXnWA2iMEBBcBoBKLv2WW7M3SgCWLVGLw+2XJvsl+weLGBMEKSfN279QFjRqrXWJ9Y3XhDCEgeAgALP7W+fTAPl3z4UIVlZYarWvrZL9gcWOCYFlFhebs3qGMJilqafjSQ9QeISA4bA8ALP6W2XAwR1e+/65yi83+3Wdk9NDYcRMUzb+3ayIiInRV7z766qsvteObb4zVLSkv1+zdO9S7WUs1ZW6AbxAC3Gfz5bAs/pbZXZCv7gvmak9BvtG6TPYLLrcmCKbExWlZn/5qk8DeMX7CACH32HquksXfMvsOF+nqRfONL/4dO3bSpCkzWPyDqE6dOpowaZrO6nK20brZhYXq/f672ltUaLQunGHHQPfYGABY/C3DZL/wwwRBuxAC3GFbAGDxtwyT/cIXEwTtQggwz6YAwOJvGSb7hT8mCNqFEGCWLQGAxd8yTPazBxME7UIIMMeGywBZ/C3DZD/7MEHQLlwiaEa4BwAWfwsx2c9OTBC0CyHAuXAOACz+FmKyn93atUtVy5at9N7C+UbrMkHQnwgBzoRrAGDxtxCT/SBJnZggaBVCQO2FYwBg8bcQk/1wPCYI2oUQUDvh9ruWBEkLJaWbLty1SVPNv7yPElj8fWdxdpauW7zQ+CVbI0aO0l/+5zmjNYMpJ+cH/efLf2vzpk3aunWLdu3aqQP79+v777/X4cNFOnSo8kBZt25dJSYmql5iolKSm6ll69Zq1aqVzjqri84993zVb9DA42dSe7//3f2aMP5fRmvGBgJ6p9fV6pXCbwL8Jr+kRNd8uECrvvvWjfIrJV0tyex2oh4KpwDA4m+hT/bv05WL3jW+aUu//jfo5VfHhNRkvyNHDmvF8uVatOg9rV3zsbZu2aIKA2dEzmjbTt2799DlV1yltK7pqlOnjoFug6O8vFy/vvN2zZ3zttG6CdHRWnTltbro9MZG68I5QkD1hUsAYPG30PqcH3TZe+8Y37b1sp69NH7CFEXHxBit64aKigqtXLlcUydP1AeL3ld+vrvHpfj4eF1z7XUaNHioLk3rGhIBqaS4WCNHDNOSjxYbrXtabKyW9L5OnQ1vQgTnCAHVEw4BgMXfQjvyD6n7gjnKLjQ7uOXCiy7W9JmzVbduXaN1TSsqKtKkCeP05tgx2rlzhyc9tGlzhu741W80eMgw358VKCoq0uCB1+vTT9YarcsEQf8iBFQt1AMAi7+Fvi0qVPcFc7X9UJ7Rup07n6W357yrxPr1jdY16fDhw3pz7Ot65Z8v6cCB/V63I6lyT/677r5Ht9x2u2JiYr1u56TycnN1Q/9rtX692T0i2tZL1LI+/dS0LhMh/YYQcGqhHABY/C2UU3xEPRfO09c53xut26bNGZozb6EaN/bvd7rvzpurJx77o/bs2e11KyfUokVL/WH0o+rX/wavWzmpffv2qX/fq7VjxzdG63ZJaqiPru6rJB8HIFsRAk4uVAMAi7+FCktLddWid7V633dG6zZNTtbceQt9O9xnb3a27rv3bi1b+pHXrVRLr8uv0F//5+9KaebPX8nv3r1L/fperW/3mh0SdWnjJnr/ymsVFxVltC6cIwScmP9/wfNzLP4WKi4v18Ali4wv/klJp2najLd9u/i/NWuGenRPC5nFX5IWf/iBemRcqrdmzfC6lRNq2bKVps142/gEwdX7vtPAJYtUbHAbYpiREB2t+Zf3UdcmruzkmK7KNcnsNKogCLWNgI5t8pNhujCb/PhXeUWFRqz4SO/s3mm0bt26dTV56kyd/YtzjNY1obS0VE8/9Sc99ugjOmL4KodgKC4u1oL572rXzp3q2etyRfnsU3GjRo2U1jVdc+e8reJic3u7bD+Up/U5ORrQ+gxFRoTqCdbwFBMIaFCbdm5tFtRSlZvPhdRmQaEUABJUOabR+OLftUlTLWDx96UKSXetWakJ28xO9ouJidWEyVOVlmb8RJJj+/fv0/AhN2rO7Le8bsWxDRvWa+XyZbrq6j6Ki/PXj+SSk1N0zrnn6Z05c4xPENx3uEh9WrQK2e9Yw1VMZKQGtDpDK/bt1Z4C42fsW0jqphAKAaESAPjkb6lHPl+rFzd8bbRm5WS/13Xllb2N1jUhM3OPbryhn9avM/ucvbR3b7bmvztPPS+/wvhpd6datWqtji5MEPz8+/1MEPQpzgT8n1AIAHzyt9Tf1v1Hj335mdGaEREReva5FzTgxkFG65qwbetW3XD9tdqze5fXrRiXm3tQ8+fN1ZVX9VbSaf4KAe3apSo5OUWL3n/PaN2V332r+KhopTFB0Hc4E1DJ7wGAT/6Wmrh9i+5es9J43dGPPq5bbr3deF2nsrOyNOCGvsrOyvK6FdcUFBRo4cL56n31NWrgs/kCXbqc7coEwcXZmUwQ9CnOBPg7APDJ31Jv7/pGI5d/JNO/pf7tPffp/gf+n+Gqzu3fv08D+vfV7l3h98n/p/IPHdIHi97X9QNu9N1vAs4773yVFBdr7do1RusuzNytzklJ6tggyWhdOGf7mQC/BgA++Vtqyd4sDVzygUoMX0o1YuQoPf6nPxutaUJJSYluHj5E677+yutWgiY396A+/fQTDbhxoAIBf10d0C2ju/Jyc/XF5+a+eqpQ5bjqCxo1VrtE/+4yaSubzwT4MQDwyd9Sn+zfp2s/XKii0lKjdfv1v0F/f+ElRfjwsqyHHvydFsyf53UbQZedlaX9+/bpyquu9rqVn+neo6e2b9umzZs2GqtZVlGhd/bsVM/kZmoWH2+sLsyw9UyA346IbPJjKRsn+701a4bu+vUdrj9O/fgY9TwnWV07N1bblES1bpKgVk0SFBEhlZZVjgv+Pu+w1u88qA27D+rrHTla/O9sfZ/n/v4Dr415U9f1u971x6kpJgjaybYdA/0UAFj8LWXjZL+92dnq0T1Nebm5rtRPqButEZe31dDLztCF7RspKlCzTT9Ly8q19D/fataKnXprxU7l5LvzwSWxfn0tXrJCzZu3cKW+E0wQtJNNIcAvAYDF31K2TvYbMmiAK9v7pjSM0939O+n2q89UgwQzZz3yCkv0wuwNemH2eh10IQhcfsWVmjh5uvG6JjBB0E62hAA/BAAWf0vZOtnv3XlzdfutvzRaMzIiQr/q20F/+uV5Soxz5/2eW1CsZ6Z9pefeWq+y8gqjtcf+a4L6XNPXaE1TmCBoJxtCgNcBgMXfUrZO9jt8+LAyul5sdKRvhxb1NfaBdF3cITjXmq9c951G/nWFdu0zd+xq1ry5Pl7zmWJ8uhgyQdBO4R4CvJwGyOJvKVsn+0nS2DdeM7r4X3ZOslb+/ZqgLf6SlH5WE33xynW67tKWxmpmZWZqwvhxxuqZxgRBO4X7FEGvzgCw+FuqrKJCNy1brJk7txutGx8frxlvzdF5511gtK5JRUVFuuj8X+jAgf1G6o28op1euSdNMVHe5PjSsnKNenalpi4xc2r89NMba82n//bdBkHH++KLzzRoQH8VFBQYrTuwdVtN6t5LAR9eqorwPRPgxT4ALP6WOjbZb+J285P9xk+aoksuSTNa17Rxb76h+Yau+R95RTu9cX+6ogLeLRiRkRHq37Wlsr8v0r+3Of8dR2FhgVJSmumcc8410J07kpNTdM555icIbjiYwwRBH4sJBDSwdVu39gloqcp9b4K+T0CwAwA7/FnMtsl+x6uoqNDdv7lTBw/mOK6V0aWppj7cvcaX9rkhIiJC11zcXJ9uOaBt2c53Ufvmm2806pbbfLlp0zFMELRTOO4YGMwAwA5/FrNtst9PrVy5XGNee8VxnQ4t6uv9p69SQl3/vNcjIiJ01QXNNXPZTuUWODt25eT8oIsvuVStWrU205xLmCBop3DbMTBYAYDT/hZ7c+sm3bt2lfG6jz72J4265Tbjdd3wl6ef1KaNzraWjYyI0JzHe6ldSqKhrsyJi41SeufGGv/BNpU7vEQwMiJSV/e5xlBn7unS5WzFx8dr2dIlRusuzs5U8/gEnduwkdG6MCOcvg4IRgDgtL/F5u7eqVErl6i8wux14/fc94Duvf+/jdZ0S3HxET1w3z0qLnb29/zr6zrqtqvPNNSVeSkN43Qg97A+2XzAUZ3du3fp9jt+pagQuDTuggsvUmlJidauWW207oLM3erQoIE6N2DLYD8Kl68D3P4S8dhp/x6mC3Pa3/8WZ2dp2LIPVerCZL8HH3rEaE03LV+2TPn5zj4ppDSM059+eZ6hjtwzevg5Oq2es2v5Dx06pOXLlpppKAgefHi0RowcZbRmWUWFfrliiRZnZxmtC3Pio6I0t1dvty4RTJO0QC5fIuhmAOC0v8U+2b9PA5a8ryMGfyktVU72e/ovzxqt6bYPFjn/nvi313dybYc/kxomxuqhoWc7rrN8mdnT6m57+i/Pql//G4zWPFJWpgFL3tcn+/cZrQtzQn2fALcCQLykeXJh8U9r3FTvsvj72oaDObr2wwXKLykxWjcjo4defOllRUZ6/+v3mliz5mNH94+vE6Vbrko11I37bu19puLrODt9v2LFMkPdBEdkZKT+8c9X1evyK4zWzS8p0dUfzNd/fjC7XTbMSYiO1oIrrlH3pilulE+X9L4kVyZHuXEk5bS/xXbkH1LvRe8aH+t74UUXa9zEKb7dKvZkcnJ+0NYtzvY9+OWVqY5PqwdTYly0buzW2lGNLZs3KyfnBzMNBUl0dLTGjB2vCy+62Gjd3OJi9f1wgXaY/64ZhoTq1wGmL7Z17bQ/7OX3yX6nsnTJYg0dfKOjGiue66NLO/lzsNHJrFr/nbo/sNBRjRlvzVG3bt0NdRQ8bk0QhPWM7xho8gyAa6f9Ya/Wrdto8rRZIbn4S9LmTZsc3b9BQowubB96l4OldWri+KzFuq+/MtRNcCXWr6/ps2arbbvQ+doGIcH41wGmAkAdVZ6i6GGoHqCmycmaPmu2mjRp4nUrtbZ1q7PT/z3ObuqLHf9qKiJCuqSjswFF27ebnRcRTA0bNtKUaTPVNDnZ61YQXtJU+UHbyHeCpo4sz8uF6/xhr1CY7Fcdu3ftcnT/bl1Cd0c4p19bZGdlGurEG25NEIT1ukt6zkQhEwHgF5L+y0AdQFLlZL9JU6erffsOXrfimNPJf22aejYp1LHzUxs6uv/e7GxDnXinffsOmjR1uuLj471uBeHlTkldnBYxEQDukHdjhRFmYmJi9eb4Sb4e61sT+/c7CwCtm4RuAGjcoK6j+4faVQAnc955F+jN8ZNC7goW+FqkDHzwNhEAehqoASgQCOiV18YoI6OH160YU+Bwr/CWjUM3ADRMdLbgFRUVGerEexkZPfTKa2MUCHgxgR1hyvHaayIAtDZQA5aLiIjQ//ztefW5pq/XrRhV6nAnxJjo0PsB4DEEgB/rc01f/c/ffvPUcgAAF1xJREFUnvf1qGOEFMc/kDJxdDE75QVW+uOjT2josJu8bsO4stJSR/cvLjE7RyGYApHOFrqIiNANPyczdNhN+uOjT3jdBiDJTADYaaAGLHbPvffrzl/f5XUbroiNdfYpuKQsdANAXqGzraATEkL3649TufPXd+mee+/3ug2Evp1OC5gIAIsN1IClRowcpQcfHu11G65JTEx0dP+D+a6PBHdNjsPe69VzZftzX3BjgiCs85HTAiYCwGuSQvdjCjwVapP9aqqewwCwcfdBQ50E37asPEf3TwjjACCF/3sfriqX9LrTIiYCwNeqDAFAjYXaZL+aSklu5uj+63aGbgDYnJnr6P6NG4fW/IOaCvf3Plz1iiTHwyZMvQMfkBRaA7yBIGjZurWj+6/bmWOmEQ+s2ehsD4R27KUPnMhiSf9topCpAFAkqY+kl8XXAcD/atXK2ZU6i/+drZLS0PuTKq+o0LL/fOuoBsN0gB8pl/RPSddIOmyioMlzUIcl/UbSOZJekrRBUqHB+kDI6dLlbEf3/z7viJY6XEi9sHbjfh3Ic3aMatu2naFugJBVqMq19B+q3Hb/LklHTBWPMlXoOF9LuttgPUf7DGzautNQGziRDqmtvW7B137xi3MVERGhiorav43fWrlTV5yfYrAr901a7GySX2RkpM46y/FW52GP45u7DBzffL3rE79CAVzUIClJbc5o66jGWyt2Or6mPpgOFZVoxrIdjmqc1eVsNUhKMtQRgBMhAAAu69HjMkf3z8kv1otzNhjqxn2vvrvZ8R4A3bp1N9QNgJMhAAAu69nrCsc1Xnh7fUhsCpRXWKLn317vuE7X9G4GugFwKgQAwGVd07s5ngefk1+sv0z/ylBH7nl84r/1XY6zIT4NkpLUNT3dUEcAToYAALisTp06uuba6xzXee6t9Vq57jsDHbnjsy0H9M93Njmuc911/RUT42yGAoCqEQCAIBg4aIjjGmXlFbrpmeWOv193w8H8Yg17eplKDQwvGjh4qIGOAFSFAAAEQVrXdLVpc4bjOpkHCnTr31YaWWhNKS0r14i/Ltc3ew85rtW2XarOP/8CA10BqAoBAAiCyMhI3fGr3xip9c7q3brlbytV7mBvAVMqKqQ7X1itBZ9kGqn3m7t+q4gIX186DYQNAgAQJIOHDFPDho2M1Jry0Tf61QurPQ0BpWXluv3vqzRu0VYj9Zo3b6EbBw42UgtA1QgAQJDUqVNHd919j7F6Y9/bomsf+VDf5xnbGbTacguKdcPjHxlb/CXpN3ffo+joaGP1AJwaAQAIoltuu10tWzobEHS8RZ9n6aK75unzLQeM1azKZ1sO6MK75hk77S9Vfvc/bPhNxuoBqBoBAAiimJhYPfzIH43W3LUvX+n3L9C9r6x19WxAXmGJHnjtE6Xft8DID/6O9+dn/sqlf0CQEQCAIOvX/wb1utz57oDHKykt10tzN6rjrW/r72+vNzo7IL+oRM/OWqcOt7ylF2ZvMH4FQr/+Nygjo4fRmgCqFgo/t2UaoI85nZa1d1+OmUZCzN7sbHXvdokOHTL7SfqY+DpRGtCttW7tnaq0Tk1U0x/Wl1dUaO3G/Zq0eLtmLNvh2t4Dp53WUIuXrlTTpk1dqe93yY2dDTzi+OaucJ8G6MY4YABVSE5J0dN/eVZ3/foOV+oXHC7VhA+2acIH23RavVhd0vF0XdKxsc5PbaimSXV1WmKsGibGKhAZoUNFJTqQe0Q7vj2kjbtztXbTfi37z7c6kHfYld6OiYiI0D/++aq1iz/gNQIA4JEBNw7SJ2vXaML4f7n6OD8cOqIFn2Qa/dGeCXfdfY969rrc6zYAa/EbAMBDf3rqaSt3vkvvlqH/9+AfvG4DsBoBAPBQTEysJk6ZrrbtUr1uJWg6duyksW9OUFQUJyABLxEAAI8lJZ2myVNnqEmTJl634rpWrVpr2szZSqxf3+tWAOsRAAAfaNWqtd6e866SU1K8bsU1rVq11vRZs9W4cWOvWwEgAgDgG2e0bac57yxQq1atvW7FuM5nddE7898Py+cGhCoCAOAjLVu20oL3P9TFl1zqdSvGpHfL0Oy58/nkD/gMAQDwmdNOa6gZs2Zr+M0jvW7FkYiICN11972aOv0t1atXz+t2APwEP8OtoS2bN2nmjOlavXqVsjIzVVRU6HVLp1S3bpyaNW+utLR0DRw0WKlntve6JVRDTEysnv3b88rI6K7f/fd9ysvN9bqlGjnttIZ68aVXjG95DHdxfLOLr7cpPMoXWwEXFxfr6aee0PRpU1RebnYv9GAJBAIaMnS4Hnx4tLGxq2wF7L7MzD166Pf/rQ8/WOR1K9XSr/8NeuyJp9jhrxr8shUwx7cTC/etgH3d3FGeB4Di4mLdfutIrV2z2nEtP7jk0jSNGTveyB8JASB4Fsyfpz+OflhZmf7a0e+Ytu1S9edn/spgnxrwQwDg+HZy4R4A+A1ANfz5ycfD5o9Dktas/ljPPP2k122ghvpc01cfr/lMf3rqGZ1+un9+UNe8eQs9/ZdntWTpShb/EMTxzV4EgCps2bxJM6ZP9boN46ZNmaRtW7d43QZqKCYmVrfdfofWfPpvPfPXv6ldqnc7CLZtl6rnnv+HPl77uX456lZFx8R41gtqh+Ob3QgAVZg1c0bIfid2KmVlZZo1c7rXbaCW4uLiNPKXt2j5yrWaPmu2Bg0eqsTERNcft36DBhoxcpTemf++Vqxaq6HDbjL2fSuCj+Ob3bgKoAofr1rhdQuuWbVqpdctwKGIiAhlZPRQRkYPHTlyWMuWLtXyZUu0fPlSbd3i/BNQZGSkzupyttLTM5TeLUNd09MVExNroHP4Acc3uxEAqrB3b7bXLbgmO8ufPyZD7cTG1tGVV/XWlVf1liTl5Pygdeu+1rqvv9L2bdu0d2+2sjIzlZPzg44UF+tQXp4CUVFKiE9QYmKi6iUmqlGj05Wamqq27VJ1Rtu26nLW2WqQ5OyHavAvjm92IwBUoaCgwOsWXBPOzw2VQ4a6deuubt26e90KfCqcjwHh/NxM4TcAAABYiAAAAICFCAAAAFiIAAAAgIUIAAAAWIgAAACAhQgAAABYiH0AXHbn3FJX67/aj39CAN7g+BbaOAMAAICFCAAAAFiIAAAAgIUIAAAAWIgAAACAhQgAAABYiAAAAICFCAAAAFiIAAAAgIUIAAAAWIgAAACAhQgAAABYiAAAAICFCAAAAFiIAAAAgIUYtuwy5lmHlo0bN2jKpAlasXyZ9uzZrcLCQq9bOqW4uDi1aNFSGd17aNhNI9ShQ0dXH4/XB8fj+BbaIrxuoBoqnNx509adjh68Q2prR/f3O69fn737chzd35Ti4iP64yMPa+KEcSovL/e6nVoJBAIaMXKUHn/iKUXHxBitzevjjuTGSY7u7/Xfr9/54PXx9RpLfIP1iouPaNiQgVq1coXXrThSVlamf735hrZu3aIpU2caW+R4fYDwxG8AYL3Rf3go5Be3461csVyPPfqIsXq8PkB4IgDAahs3btCkieO9bsO48ePe1ObNmxzX4fUBwhcBAFabMmlCyH6nfSplZWWaMnmi4zq8PkD4IgDAasuXL/W6BdcsX7rEeQ1eHyBsEQBgtazMTK9bcE1m5h7HNXh9gPBFAKhCfHy81y24JiEhwesWPFdQUOB1C67Jz893XIPXJ7xxfLMbAaAKyckpXrfgmuSUZl63AMBDHN/sRgCoQlrXbl634Jr09PB9bgCqxvHNbgSAKgwcNFiBQMDrNowLBAIaMHCw120A8BDHN7sRAKqQemZ7DRk63Os2jBs2fITatUv1ug0AHuL4ZjcCQDU8+PBoXZrW1es2jElLS9fvH/qD120A8AGOb/YiAFRDdHS0Xn9jnIbfPDKkT5cFAgHdPGKUXh87TlFRjIEAwPHNZr6eVHSUp9MAf2rb1i2aNXO6Vq1aqazMTBUW+vsyqbi4eDVr3lzp6d00YOBg46fFQn0aoNNpbH7n9PXl9XGX19MAf4rj24+F+zRAXzd3lK8CAH7M9gBw59xSQ52cmNN5614HgHB/fZzyWwDAj4V7AOArAAAALEQAAADAQgQAAAAsRAAAAMBCBAAAACxEAAAAwEIEAAAALEQAAADAQgQAAAAsRAAAAMBCBAAAACxEAAAAwEIEAAAALEQAAADAQgQAAAAs5GyYtoW2bN6kmTOma/XqVcrKzFRRUaHXLZ1S3bpxata8udLS0jVw0GClntne65bCitN59OGO1ye0cHyzS4TXDVRDhZM7b9q600gTxcXFevqpJzR92hSVl5cbqRlsgUBAQ4YO14MPj1Z0dLSRmh1SWzu6/959OUb6qK3kxkmePr7bnL6+vD7ucvr6cnz7P348vsnnayzxvBqKi4t1+60jtXbNaq9bcaSsrEyTJ03Q9u3bNGbseGN/JABCF8c3e/EbgGr485OPh/wfx/HWrP5Yzzz9pNdtAPABjm/2IgBUYcvmTZoxfarXbRg3bcokbdu6xes2AHiI45vdCABVmDljesh+J3YqZWVlmjVzutdtAPAQxze7EQCqsPrjlV634JpVq8L3uQGoGsc3uxEAqpCdne11C67Jzsr0ugUAHuL4ZjcCQBUKCwu8bsE1BQXh+9yqKyEhwesWXFOvXj3HNXh9whvHN7sRAGC1lGbNvG7BNc2aNXdcg9cHCF8EAFite/fLvG7BNd0v6+m8Bq8PELYIALDasJtGKBAIeN2GcYFAQMOG3ey4Dq8PEL4IALBahw4dNWLkKK/bMG7ULbfpzPbO90Xn9QHCFwEA1nv8iafUrVt3r9swJiOjh/742J+M1eP1AcITAQDWi46J0eSpM3TLrbeH9OnuQCCg226/Q5OmzjC6DzqvDxCefD2p6ChPpwEamAbla16/Pl5PY/upzZs3acrkiVq+dIn27Nnt+0uJ4uPj1aJFS3W/rKeGDbvZ9dPavD5meT0NkOPbqTENEI7cObfU1frMWzerffsOevyJp7xuw7d4fXA8jm+hja8AAACwEAEAAAALEQAAALAQAQAAAAsRAAAAsBABAAAACxEAAACwEAEAAAALEQAAALAQAQAAAAsRAAAAsBABAAAACxEAAACwEAEAAAALEQAAALAQw5ZdxjxrAOGK41to4wwAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAW4iLOKsTHx6ugoMDrNlwRHx/vdQu+s3HjBk2ZNEErli/Tnj27VVhY6HVLcCAuLk4tWrRURvceGnbTCHXo0NHrlnyF45vdOANQheTkFK9bcE1Ks+Zet+AbxcVH9OD/e0CXX9ZNb4x5TZs3b2LxDwOFhYXavHmTxrz+qi6/rJsefvB3Kiku9rot3+D4ZjcCQBXSunbzugXXdO2a7nULvlBcfETDhgzU+HFvqry83Ot24JKysjL96803NGzoQELAURzf7EYAqMLAQYMVCAS8bsO4QCCgGwcN8boNXxj9h4e0auUKr9tAkKxcsVyPPfqI1234Asc3uxEAqpB6ZnsNGTrc6zaMGzZ8hNq1S/W6Dc9t3LhBkyaO97oNBNn4cW9q8+ZNXrfhOY5vdiMAVMODD4/WpWldvW7DmLS0dP3+oT943YYvTJ08kdP+FiorK9OUyRO9bsMXOL7ZiwBQDdHR0Xr9jXEafvPIkD5dFggEdPOIUXp97DhFRXEBiCQtW7bE6xbgkeVL+beXOL7ZLMLrBqqhwsmdN23daaiNStu2btGsmdO1atVKZWVmqrDQ35fQxMXFq1nz5kpP76YBAwcbPy3WIbW1o/vv3ZdjppFaSj2jhfLz8z3tAd5ISEjQ1m/2eNpDcuMkR/fn+Obv45t8vsb6urmjfBUA8GOhHgCcHoAR2kL9/cfxzV3hHgD4CgAAAAsRAAAAsBABAAAACxEAAACwEAEAAAALEQAAALAQAQAAAAuxXRLgwJ1zS71u4ZRe7efsTzzcnx9gM84AAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIS6iraEtmzdp5ozpWr16lbIyM1VUVOh1S6dUt26cmjVvrrS0dA0cNFipZ7b3uiUAPsXxzS4EgGoqLi7W0089oenTpqi8vNzrdqqtqKhQ27Zu0batWzR50ngNGTpcDz48WtHR0V63BsAnOL7ZiQBQDcXFxbr91pFau2a11604UlZWpsmTJmj79m0aM3Y8fyQAOL5ZjN8AVMOfn3w85P84jrdm9cd65uknvW4DgA9wfLMXAaAKWzZv0ozpU71uw7hpUyZp29YtXrcBwEMc3+xGAKjCzBnTQ+o7seoqKyvTrJnTvW4DgIc4vtmNAFCF1R+v9LoF16xaFb7PDUDVOL7ZjQBQhezsbK9bcE12VqbXLQDwEMc3uxEAqlBYWOB1C64pKAjf5wagahzf7EYAAADAQgQAAAAsRAAAAMBCBAAAACxEAAAAwEIEAAAALEQAAADAQkwDdNmdc0tdrf9qP/4JAXiD41to4wwAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABZi2LLLmGcNIFxxfAttnAEAAMBCBAAAACxEAAAAwEIEAAAALEQAAADAQgQAAAAsRAAAAMBCBIAqxMfHe92CaxISErxuAYCHOL7ZjQBQheTkFK9bcE1ySjOvWwDgIY5vdiMAVCGtazevW3BNenr4PjcAVeP4ZjcCQBUGDhqsQCDgdRvGBQIBDRg42Os2AHiI45vdCABVSD2zvYYMHe51G8YNGz5C7dqlet0GAA9xfLMbAaAaHnx4tC5N6+p1G8akpaXr9w/9wes2APgAxzd7EQCqITo6Wq+/MU7Dbx4Z0qfLAoGAbh4xSq+PHaeoKKZ4AeD4ZjNepWqKjo7W6D8+rqFDh2vWzOlatWqlsjIzVVhY4HVrpxQXF69mzZsrPb2bBgwczGkxAD/D8c1OBIAaapd6ph58eLTXbQCAcRzf7MJXAAAAWIgAAACAhQgAAABYiAAAAICFCAAAAFiIAAAAgIUIAAAAWIgAAACAhQgAAABYiAAAAICFCAAAAFiIAAAAgIUIAAAAWIgAAACAhQgAAABYiAAAAICFCAAAAFiIAAAAgIUIAAAAWIgAAACAhQgAAABYiAAAAICFCAAAAFgowoWaXSTdJqmXpNaS4l14DAAAwl2BpJ2SPpA0RtIGk8VNBoBYSX+XdIc4swAAgEllkl6R9ICkYhMFTQWAWEkLJV1mqB4AAPi5xZL6yEAICDjvRZL0kqSBhmoBAIATO0NSkio/dDti4gxAF0lfitP+AAAEQ5mkX0ha76SIiUX7NkN1AABA1QKqXHsdMbFwX26gBgAAqL4rnBYw8RXAIUkJBuoAAIDqyZdUz0kBEwGgwkANAABQM47WcL67BwDAQgQAAAAsRAAAAMBCBAAAACxEAAAAwEIEAAAALEQAAADAQlFeNzDo5l953QIAAEE3Y+Irnj4+ZwAAALAQAQAAAAsRAAAAsBABAAAACxEAAACwEAEAAAALEQAAALAQAQAAAAsRAAAAsBABAAAACxEAAACwEAEAAAALEQAAALAQAQAAAAsRAAAAsFCEgRoVBmoAAICacbSGcwYAAAALEQAAALAQAQAAAAsRAAAAsBABAAAACxEAAACwEAEAAAALmQgAhwzUAAAA1ZfntICJALDHQA0AAFB9u50WMBEAPjBQAwAAVN8ipwVMbAV8lqQvJQUM1AIAAKdWJulsSRucFDFxBmCdpFcN1AEAAFX7pxwu/pKZMwCSFCNpgaRehuoBAICf+1BSH0klTguZOm1fJmmapCRJ54vLCwEAMKlM0kuSRsrA4i+ZOwNwvM6SbpV0haTWkhJceAwAAMJdvqSdqvzB31gZOO0PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABO7f8DAtMSPW98trMAAAAASUVORK5CYII='
fetch("ProvinceCoordinates.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            provinceCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
fetch("LineCoordinates.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            lineCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
var point_template_commune = {
    title: "{Name}",
    content: `<p>{Location}</p>.`
};
// var point_template_province = {
//     title: "{Name}",
//     content: `  <b>{Location}</b>
//     <ul>
//         <li>Dân số: 105.371 người</li>
//         <li>Diện tích: 340,02 km²</li> 
//     </ul>`
// };
var point_template_province = {
    title: "{Name}",
    content: [
        {
            type: "fields",
            fieldInfos: [
                { fieldName: "Diện Tích" },
                { fieldName: "Dân Số" },
            ],
        },
    ],
};
var point_template_school = {
    title: "{Name}",
    content: `  <p>Địa chỉ: {Location}</p>`
};
var point_template_area = {
    title: "{Name}",
    content: `<p>{Location}</p>.
    <ul>
        <li>Dân số: 2,6 triệu người</li>
        <li>Diện tích: 2694,64 km²</li> 
    </ul>
    `
};
var jsondata = {
    "points": [
        // {
        //     type: "point",
        //     longitude: 106.634722,
        //     latitude: 11.2725,
        //     Name: "TT.Lai Uyên",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.550556,
        //     latitude: 11.212222,
        //     Name: "Long Nguyên",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.608889,
        //     latitude: 11.202222,
        //     Name: "Lai Hưng",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.638734,
        //     latitude: 11.347171,
        //     Name: "Trừ Văn Thố",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.566944,
        //     latitude: 11.336389,
        //     Name: "Cây Trường II",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.660278,
        //     latitude: 11.243333,
        //     Name: "Tân Hưng",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.696667,
        //     latitude: 11.221944,
        //     Name: "Hưng Hòa",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        {
            type: "point",
            longitude: 106.6350296659463,
            latitude: 11.249030232581973,
            Name: "Trường THPT Bàu Bàng",
            Location: "6JXP+J26, TT. Lai Uyên, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.64250648089735,
            latitude: 11.354000351441531,
            Name: "Trường THCS Trừ Văn Thố",
            Location: "9J3V+J22, Trừ Văn Thố, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.57896895624805,
            latitude: 11.342047096618824,
            Name: "Trường THCS Cây Trường II",
            Location: "Cây Trường 2, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.57896895624805,
            latitude: 11.342047096618824,
            Name: "Trường THCS Cây Trường II",
            Location: "Cây Trường 2, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.63447706916406,
            latitude: 11.317418392625495,
            Name: "Trường Tiểu học Lai Uyên",
            Location: "8J8M+XR6, Ấp Bàu Hốt, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.63550830196404,
            latitude: 11.274471153087596,
            Name: "Trường THCS Lai Uyên",
            Location: "7JFP+Q6J, Ap Bàu Bàng, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.63532185625554,
            latitude: 11.246380550649418,
            Name: "Trường Tiểu Học Bàu Bàng",
            Location: "6JWP+H44, TT. Lai Uyên, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.62935902567882,
            latitude: 11.22338464443049,
            Name: "Trường tiểu học Kim Đồng, Bàu Bàng",
            Location: "6JFH+9P5, Unnamed, Road, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.61818523014792,
            latitude: 11.196126511608227,
            Name: "Trường tiểu học Lai Hưng",
            Location: "Quốc lộ 13, Ấp Lai Khê, X, Lai Hưng, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.68247146836654,
            latitude: 11.233065380185284,
            Name: "Trường Trung Học Cơ Sở Quang Trung",
            Location: "6MMJ+6XG, Hưng Hoà, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.6917105263474,
            latitude: 11.228473524709852,
            Name: "Trường Mầm Non Hồng Nhung",
            Location: "6MHR+CM5, ĐH612, Hưng Hoà, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.69414476675988,
            latitude: 11.224029539827802,
            Name: "Trường mầm non Hưng Hòa",
            Location: "6MFV+HJX, Ấp 5, Thành phố Bến Cát, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.69812321257254,
            latitude: 11.222064231221664,
            Name: "Trường Tiểu Học Hưng Hòa - H.Bàu Bàng",
            Location: "ĐH612, Hưng Hoà, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
    ],
    "lines": [
        {
            type: "polyline",
            paths: lineCoordinates,
            symbol: {
                type: "simple-line",
                color: [214, 48, 49],
                width: 4,
            },
            Name: "Tỉnh Bình Dương",
            Location: "Bình Dương, Việt Nam",
            popupTemplate: point_template_area
        }
    ],
    "polygons": [
        {
            type: "polygon",
            rings: provinceCoordinates,
            Name: "Bàu Bàng",
            // Location: "Bình Dương, Việt Nam",
            attributes: graphicAttBB,
            symbol: {
                type: "simple-fill",
                color: [186, 220, 88, 0.4],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_province
        },

    ]
};

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
], function (Map, MapView, Graphic, GraphicsLayer) {

    var map = new Map({
        basemap: "topo-vector"
    });
    map.on("load", function () {
        map.graphics.enableMouseEvents();
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [106.63466897227721, 11.271098372588598],
        zoom: 11,
        highlightOptions: {
            color: "blue"
        }
    });
    var createGraphic = function (data) {
        return new Graphic({
            geometry: data,
            symbol: data.symbol,
            attributes: data,
            popupTemplate: data.popupTemplate
        });
    };
    const createPolygonsGraphic = (data) => {
        return new Graphic({
            geometry: data,
            symbol: data.symbol,
            attributes: data.attributes,
            popupTemplate: data.popupTemplate
        });
    };
    var graphicsLayer = new GraphicsLayer();
    jsondata.points.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
    });
    jsondata.lines.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
    });
    jsondata.polygons.forEach(function (data) {
        graphicsLayer.add(createPolygonsGraphic(data));
    });
    map.add(graphicsLayer);


});